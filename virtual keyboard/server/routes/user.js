const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system'),
    shortId = require('shortid');

router.get('/api/user/status', (req, res) => {
    const usersData = getUsersFromDB(),
        user = usersData.find(user => user.status === 'online');

    user ? res.send(user) : res.send({ error: 'Произошла ошибка на сервере!' });
})

router.post('/api/user', (req, res) => {
    const usersData = getUsersFromDB(),
        newUser = req.body,
        user = usersData.find(user => user.name === newUser.name);

    if (user) {
        res.send({ error: 'Данный псевдоним уже занят другим пользователем!' });
    } else {
        newUser.id = shortId.generate();
        newUser.recordLetters = '0';
        newUser.errors = '0';
        newUser.status = 'online';

        usersData.push(newUser);
        setUsersToDB(usersData);

        res.send(newUser);
    }
});

router.get('/api/user/:name/:password', (req, res) => {
    const usersData = getUsersFromDB(),
        reqParams = req.params,
        user = usersData.find(user => user.name === reqParams.name && user.password === reqParams.password);

    if (!user) {
        res.send({ error: 'Введён неверный логин или пароль!' });
    } else {
        user.status = 'online';

        setUsersToDB(usersData);

        res.send(user);
    }
})

router.put('/api/user/results', (req, res) => {
    const usersData = getUsersFromDB(),
        reqBody = req.body,
        user = usersData.find(user => user.status === 'online');

    if (+user.recordLetters < +reqBody.letters) {
        user.recordLetters = reqBody.letters;
        user.errors = reqBody.errors;

        setUsersToDB(usersData);
    }

    res.send(204);
})

function getUsersFromDB() {
    return JSON.parse(fs.readFileSync(config.get('database.users'), 'utf8'));
}

function setUsersToDB(usersData) {
    fs.writeFileSync(config.get('database.users'), JSON.stringify(usersData));
}

module.exports = router;