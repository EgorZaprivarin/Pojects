import Component from '../component';

import Users from '../../models/users';

import TrainerTemplate from '../../../templates/pages/trainer';
import Error404Template from '../../../templates/pages/error404';

class Trainer extends Component {
   constructor() {
      super();

      this.traningText = this.createTraningText();
   }

   async getData() {
      return await Users.getUserStatus();
   }

   async render(user) {
      this.changeBG(this.contentContainer);

      return await (!user.error ? TrainerTemplate() : Error404Template());
   }

   afterRender() {
      const input = document.getElementsByTagName('input')[0],
         btn = document.getElementsByClassName('trainer__button')[0],
         btnExit = document.getElementsByClassName('result__btn-exit')[0],
         results = document.getElementsByClassName('trainer__result-bg')[0];

      btn.onclick = this.startStopTraning.bind(this);
      input.addEventListener('keydown', this.keydownHandler.bind(this));
      input.addEventListener('keyup', this.keyupHandler);
      btnExit.onclick = () => results.classList.remove('active');

      this.viewUpdate();
   }

   startStopTraning() {
      const trainer = document.getElementsByClassName('trainer')[0],
         btn = document.getElementsByClassName('trainer__button')[0],
         timerCount = document.getElementsByClassName('trainer__timer-count')[0],
         lettersCount = document.getElementsByClassName('trainer__letters-count')[0],
         errorsCount = document.getElementsByClassName('trainer__errors-count')[0];

      this.statusCheck(trainer);

      (trainer.dataset.status === 'started') ? this.startTraning(trainer, btn, timerCount, lettersCount, errorsCount) : this.stopTraning(btn, timerCount, lettersCount, errorsCount);
   }

   startTraning(trainer, btn, timerCount, lettersCount, errorsCount) {
      const results = document.getElementsByClassName('trainer__result-bg')[0],
         lettersAmount = document.getElementsByClassName('result__letters-amount')[0],
         errorsAmount = document.getElementsByClassName('result__errors-amount')[0],
         input = document.getElementsByTagName('input')[0];

      btn.innerText = 'сбросить';
      input.classList.add('visible');

      const timer = setInterval(() => {
         if (trainer.dataset.status === 'started') {
            input.focus();
         } else {
            clearInterval(timer);
            input.blur();
         }
      }, 500);

      const stopwatch = setInterval(async () => {
         if (trainer.dataset.status === 'started') {
            timerCount.innerText--;
         } else {
            clearInterval(stopwatch);
         }

         if (timerCount.innerText === '0') {
            const newResults = {
               letters: lettersCount.innerText,
               errors: errorsCount.innerText
            };

            clearInterval(stopwatch);

            await Users.changeResults(newResults);

            lettersAmount.innerText = lettersCount.innerText;
            errorsAmount.innerText = errorsCount.innerText;
            results.classList.add('active');
            input.classList.remove('visible');

            this.statusCheck(trainer);
            this.stopTraning(btn, timerCount, lettersCount, errorsCount);
         }
      }, 1000);
   }

   stopTraning(btn, timerCount, lettersCount, errorsCount) {
      btn.innerText = 'старт';
      lettersCount.innerText = '0';
      timerCount.innerText = '60';
      errorsCount.innerText = '0';
      this.traningText.currentStringsIndex = 0;
      this.traningText.currentPressedIndex = 0;
      this.traningText.totalLetters = 0;
      this.traningText.errorsCount = 0;

      this.viewUpdate();
   }

   keydownHandler(event) {
      event.preventDefault();

      let key = event.key;
      const letters = Array.from(document.querySelectorAll('[data-letters]')),
         letter = letters.find(letter => letter.dataset.letters.includes(key)),
         audio = new Audio('https://zvukipro.com/uploads/files/2019-07/1564069189_a4bb978da8d70cb.mp3');

      audio.volume = 0.3;

      if (letter) {
         letter.classList.add('pressed');
         audio.play();
         this.press(key);
         return;
      }

      if (key === ' ') {
         key = 'Space';
         audio.play();
         this.press(' ');
      }

      const specs = Array.from(document.querySelectorAll('[data-spec]')),
         allSpec = specs.filter(spec => spec.dataset.spec === key);

      if (allSpec) {
         allSpec.forEach(spec => spec.classList.add('pressed'));
      }
   }

   keyupHandler(event) {
      let key = event.key;
      const letters = Array.from(document.querySelectorAll('[data-letters]')),
         letter = letters.find(letter => letter.dataset.letters.includes(key));

      if (letter) {
         letter.classList.remove('pressed');
      }

      if (key === ' ') {
         key = 'Space';
      }

      const specs = Array.from(document.querySelectorAll('[data-spec]')),
         allSpec = specs.filter(spec => spec.dataset.spec === key);

      if (allSpec) {
         allSpec.forEach(spec => spec.classList.remove('pressed'));
      }
   }

   createTraningText() {
      const text = 'Повседневная практика показывает, что выбранный нами инновационный путь играет важную роль в формировании всесторонне сбалансированных нововведений? Задача организации, в особенности же рамки и место обучения кадров позволяет оценить значение системы масштабного изменения ряда параметров. Практический опыт показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнить важнейшие задания по разработке системы масштабного изменения ряда параметров! Соображения высшего порядка, а также начало повседневной работы по формированию позиции напрямую зависит от существующих финансовых и административных условий! Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании экономической целесообразности принимаемых решений.Значимость этих проблем настолько очевидна, что курс на социально - ориентированный национальный проект обеспечивает широкому кругу специалистов участие в формировании ключевых компонентов планируемого обновления! Повседневная практика показывает, что выбранный нами инновационный путь требует от нас системного анализа существующих финансовых и административных условий. Не следует, однако, забывать о том, что выбранный нами инновационный путь создаёт предпосылки качественно новых шагов для соответствующих условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки модели развития! Соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития ? С другой стороны сложившаяся структура организации влечет за собой процесс внедрения и модернизации направлений...',
         traningText = {
            text,
            strings: [],
            maxStringsLength: 76,
            maxShowStrings: 1,
            currentStringsIndex: 0,
            currentPressedIndex: 0,
            errorsCount: 0,
            errorLetter: null,
            totalLetters: 0
         },
         words = traningText.text.split(' ');

      let string = [];

      for (const word of words) {
         const newStringLength = [...string, word].join(' ').length;

         if (newStringLength > traningText.maxStringsLength) {
            traningText.strings.push(string.join(' '));
            string = [];
         }

         string.push(word);
      }

      if (string.length) {
         traningText.strings.push(string.join(' '));
      }

      return traningText;
   }

   press(letter) {
      const string = this.traningText.strings[this.traningText.currentStringsIndex],
         mustLetter = string[this.traningText.currentPressedIndex],
         lettersCount = document.getElementsByClassName('trainer__letters-count')[0],
         errorsCount = document.getElementsByClassName('trainer__errors-count')[0];

      if (letter === mustLetter) {
         this.traningText.currentPressedIndex++;
         this.traningText.totalLetters++;
         lettersCount.innerText = this.traningText.totalLetters;

         if (string.length === this.traningText.currentPressedIndex) {
            this.traningText.currentStringsIndex++;
            this.traningText.currentPressedIndex = 0;
         }
      } else {
         this.traningText.errorLetter = mustLetter;
         this.traningText.errorsCount++;
         errorsCount.innerText = this.traningText.errorsCount;
      }

      this.viewUpdate();
   }

   viewUpdate() {
      const string = this.traningText.strings[this.traningText.currentStringsIndex],
         textExampleContainer = document.getElementsByClassName('text-example-container')[0],
         line = document.createElement('div'),
         done = document.createElement('span'),
         currentLetter = document.createElement('span');

      line.classList.add('trainer__text-example');
      done.classList.add('done');
      currentLetter.classList.add('focus-letter');
      done.textContent = string.slice(0, this.traningText.currentPressedIndex);

      line.append(
         done,
         ...string.slice(this.traningText.currentPressedIndex, this.traningText.currentPressedIndex + 1).split('').map(letter => {
            if (string[this.traningText.currentPressedIndex] === this.traningText.errorLetter) {
               const error = document.createElement('span');

               error.classList.add('error-letter');
               error.innerText = letter;
               this.traningText.errorLetter = null;

               return error;
            }

            currentLetter.innerText = letter;

            return currentLetter;
         }),
         ...string.slice(this.traningText.currentPressedIndex + 1).split('').map(letter => letter)
      );
      textExampleContainer.innerHTML = '';
      textExampleContainer.append(line);

      this.addCursorText();
   }

   statusCheck(trainer) {
      trainer.dataset.status === 'initial' ? trainer.dataset.status = 'started' : trainer.dataset.status = 'initial';
   }

   addCursorText() {
      const focusText = document.getElementsByClassName('focus-letter')[0],
         error = document.getElementsByClassName('error-letter')[0],
         focusInterval = setInterval(() => {
            if (error) {
               clearInterval(focusInterval);
            }

            if (focusText) {
               focusText.classList.toggle('focus-letter');
            }
         }, 500);
   }

   changeBG(contentContainer) {
      contentContainer.classList.remove('login-bg_color');
      contentContainer.classList.add('ibg');
   }
}

export default Trainer;