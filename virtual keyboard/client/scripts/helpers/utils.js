export const parseCurrentURL = () => {
   const urlPart = location.hash.slice(2);

   return urlPart;
};

setInterval(() => {
   const timeContainer = document.getElementsByClassName('footer__time')[0];
   const timeOfDay = new Date();

   timeContainer.innerHTML = timeOfDay.toLocaleTimeString();
}, 1000);

export const buttonTextChange = page => {
   if (page === '' || page === 'registration') {
      return 'Вход';
   } else if (page === 'login') {
      return 'Регистрация';
   }
};