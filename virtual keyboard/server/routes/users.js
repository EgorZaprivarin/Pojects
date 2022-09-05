const express = require('express'),
    router = express.Router(),
    config = require('config'),
    fs = require('file-system');

router.put('/api/users/status', (req, res) => {
    const usersData = getUsersFromDB();

    usersData.forEach(user => user.status = 'offline');

    setUsersToDB(usersData);

    res.sendStatus(204);
});

router.get('/api/users', (req, res) => res.send(fs.readFileSync(config.get('database.users'), 'utf8')));

function getUsersFromDB() {
    return JSON.parse(fs.readFileSync(config.get('database.users'), 'utf8'));
}

function setUsersToDB(usersData) {
    fs.writeFileSync(config.get('database.users'), JSON.stringify(usersData));
}

module.exports = router;
