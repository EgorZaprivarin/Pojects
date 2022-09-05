import Component from '../component.js';

import Users from '../../models/users';

import AboutTemplate from '../../../templates/pages/about';

class About extends Component {
    async getData() {
        await Users.changeStatus();
    }

    async render() {
        this.changeBG(this.contentContainer);

        return await AboutTemplate();
    }

    changeBG(contentContainer) {
        contentContainer.classList.remove('login-bg_color');
        contentContainer.classList.add('ibg');
    }
}

export default About;