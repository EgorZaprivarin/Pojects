import './index.html';
import './index.scss';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const btn = document.querySelector('.form__btn'),
   input = document.querySelector('input'),
   form = document.querySelector('.form');

input.onkeyup = () => disabledBtn(input);

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const phoneNumber = {
      number: input.value
   };

   const message = {
      succes: 'Скоро мы с вами свяжемся!',
      failury: 'Произошла ошибка...'
   };

   postData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(phoneNumber))
      .then(data => {
         console.log(data);
         openThanksModal(message.succes);
      })
      .catch(() => {
         openThanksModal(message.failury);
      })
      .finally(() => {
         form.reset();
         disabledBtn(input);
      })
})

async function postData(url, data) {
   const res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: data
   });

   return await res.json();
}

function openThanksModal(message) {
   const modal = document.createElement('div');

   modal.classList.add('thanks-modal');
   modal.innerHTML = `
      <p>${message}</p>
   `;
   document.querySelector('.container').append(modal);

   setTimeout(() => {
      modal.remove();
   }, 2000);
}

function disabledBtn(input) {
   btn.disabled = !input.value.trim();
}


