import Component from '../component.js';

import Users from '../../models/users';

import RecordsTemplate from '../../../templates/pages/records';
import Error404Template from '../../../templates/pages/error404';

class Records extends Component {
   async getData() {
      return await Users.getUserStatus();
   }

   async render(user) {
      const users = await Users.getUsers();

      users.sort((a, b) => +b.recordLetters - +a.recordLetters);
      this.changeBG(this.contentContainer);

      return await (!user.error ? RecordsTemplate({ users }) : Error404Template());
   }



   changeBG(contentContainer) {
      contentContainer.classList.remove('login-bg_color');
      contentContainer.classList.add('ibg');
   }
}

export default Records;