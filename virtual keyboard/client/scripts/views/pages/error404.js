import Component from '../component.js';

import Error404Template from '../../../templates/pages/error404';

class Error404 extends Component {
   async render() {
      this.changeBG(this.contentContainer);

      return await Error404Template();
   }

   changeBG(contentContainer) {
      contentContainer.classList.remove('login-bg_color');
      contentContainer.classList.add('ibg');
   }
}

export default Error404;