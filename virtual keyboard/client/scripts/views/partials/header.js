import Component from '../component.js';

import Users from '../../models/users';

import HeaderTemplate from '../../../templates/partials/header';

class Header extends Component {
    async render() {
        const page = this.urlPart,
            userIsOnline = await Users.getUserStatus();

        return await HeaderTemplate({
            isTrainerPage: (page === 'trainer'),
            isRecordsPage: (page === 'records'),
            isTrainerOrRecords: (page === 'trainer' || page === 'records'),
            displayNone: (!page || page === 'login' || page === 'registration'),
            href: (page === 'login' ? '#/registration' : '#/login'),
            page: (page === '' || page === 'login' || page === 'registration'),
            buttonText: this.buttonText,
            onlineUser: !userIsOnline.error,
            userIsOnline
        });
    }

    afterRender() {
        const btnLogout = document.getElementsByClassName('online')[0];
        let userName;

        if (btnLogout) {
            userName = btnLogout.innerText;
        }

        if (btnLogout) {
            btnLogout.onmouseover = () => btnLogout.innerText = 'Выйти';
            btnLogout.onmouseout = () => btnLogout.innerText = userName;
        }
    }
}

export default Header;