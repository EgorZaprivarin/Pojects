import { parseCurrentURL } from '../helpers/utils';
import { buttonTextChange } from '../helpers/utils';

class Component {
   constructor() {
      this.urlPart = parseCurrentURL();
      this.buttonText = buttonTextChange(this.urlPart);
      this.contentContainer = document.getElementsByClassName('content-container')[0];
   }

   async getData() { }

   afterRender() { }
}

export default Component;