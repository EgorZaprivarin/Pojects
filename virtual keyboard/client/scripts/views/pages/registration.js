import Component from '../component';

import Users from '../../models/users';

import RegistrationTemplate from '../../../templates/pages/registration';

class Registration extends Component {
   constructor() {
      super();

      this.model = Users;
   }

   async getData() {
      await Users.changeStatus();
   }

   async render() {
      this.changeBG(this.contentContainer);

      return await RegistrationTemplate();
   }

   afterRender() {
      this.setActions();
   }

   setActions() {
      const loginButton = document.getElementsByClassName('page-login__button')[0],
         loginInput = document.getElementsByClassName('page-login__login')[0],
         passwordInput = document.getElementsByClassName('page-login__password')[0],
         passwordRepeatInput = document.getElementsByClassName('page-login__password-repeat')[0];

      loginInput.onkeyup = () => this.disableBtn(loginButton, loginInput, passwordInput, passwordRepeatInput);
      passwordInput.onkeyup = () => this.disableBtn(loginButton, loginInput, passwordInput, passwordRepeatInput);
      passwordRepeatInput.onkeyup = () => this.disableBtn(loginButton, loginInput, passwordInput, passwordRepeatInput);

      loginButton.onclick = async evt => {
         evt.preventDefault();

         if (this.passwordСhecking(passwordInput, passwordRepeatInput) !== true) {
            this.clearPasswordsAndMessage(loginButton, passwordInput, passwordRepeatInput);
            return;
         }

         const user = await this.addUser(loginInput, passwordInput);

         if (!user.error) {
            location.hash = '#/trainer';
         } else {
            this.clearLoginAndMessage(loginButton, user, loginInput);
         }
      };
   }

   disableBtn(loginButton, loginInput, passwordInput, passwordRepeatInput) {
      loginButton.disabled = !(loginInput.value.trim() && passwordInput.value.trim().length > 4 && passwordRepeatInput.value.trim().length > 4);
   }

   passwordСhecking(passwordInput, passwordRepeatInput) {
      return passwordInput.value.trim() === passwordRepeatInput.value.trim();
   }

   clearPasswordsAndMessage(loginButton, passwordInput, passwordRepeatInput) {
      const errorMessage = document.createElement('p'),
         pageLoginForm = document.getElementsByClassName('page-login__form')[0],
         message = document.getElementsByClassName('red')[0];

      if (message) {
         message.remove();
      }

      errorMessage.innerHTML = 'Пароли не совпадают!';
      errorMessage.classList.add('red');
      pageLoginForm.appendChild(errorMessage);

      passwordInput.value = '';
      passwordRepeatInput.value = '';
      passwordInput.classList.add('password-error');
      passwordRepeatInput.classList.add('password-error');
      loginButton.disabled = true;
   }

   clearLoginAndMessage(loginButton, user, loginInput) {
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
      loginButton.disabled = true;
   }

   async addUser(loginInput, passwordInput) {
      const newUser = {
         name: loginInput.value.trim(),
         password: passwordInput.value.trim()
      };

      return await this.model.addUser(newUser);
   }

   changeBG(contentContainer) {
      contentContainer.classList.remove('ibg');
      contentContainer.classList.add('login-bg_color');
   }
}

export default Registration;