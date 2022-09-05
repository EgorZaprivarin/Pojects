import Component from '../component';

import Users from '../../models/users';

import LoginTemplate from '../../../templates/pages/login';

class Login extends Component {
   async getData() {
      await Users.changeStatus();
   }

   async render() {
      this.changeBG(this.contentContainer);

      return await LoginTemplate();
   }

   afterRender() {
      this.setActions();
   }

   setActions() {
      const loginButton = document.getElementsByClassName('page-login__button')[0],
         loginInput = document.getElementsByClassName('page-login__login')[0],
         passwordInput = document.getElementsByClassName('page-login__password')[0];

      loginInput.onkeyup = () => this.disableBtn(loginButton, loginInput, passwordInput);
      passwordInput.onkeyup = () => this.disableBtn(loginButton, loginInput, passwordInput);

      loginButton.onclick = async evt => {
         evt.preventDefault();

         const user = await this.getUser(loginInput, passwordInput);

         if (!user.error) {
            location.hash = '#/trainer';
         } else {
            this.clearInputsAndMessage(loginButton, user, loginInput, passwordInput);
         }
      };
   }

   disableBtn(loginButton, loginInput, passwordInput) {
      loginButton.disabled = !(loginInput.value.trim() && passwordInput.value.trim().length > 4);
   }

   async getUser(loginInput, passwordInput) {
      const user = {
         name: loginInput.value.trim(),
         password: passwordInput.value.trim()
      };

      return await Users.getUser(user);
   }

   clearInputsAndMessage(loginButton, user, loginInput, passwordInput) {
      const errorMessage = document.createElement('p'),
         pageLoginForm = document.getElementsByClassName('page-login__form')[0],
         message = document.getElementsByClassName('red')[0];

      if (message) {
         message.remove();
      }

      errorMessage.innerHTML = user.error;
      errorMessage.classList.add('red');
      pageLoginForm.appendChild(errorMessage);

      loginInput.value = '';
      loginInput.classList.add('password-error');
      passwordInput.value = '';
      passwordInput.classList.add('password-error');
      loginButton.disabled = true;
   }

   changeBG(contentContainer) {
      contentContainer.classList.remove('ibg');
      contentContainer.classList.add('login-bg_color');
   }
}

export default Login;