import '../styles/app';

import { parseCurrentURL } from './helpers/utils';

import Header from './views/partials/header';
import Footer from './views/partials/footer';

import Trainer from './views/pages/trainer';
import Login from './views/pages/login';
import Registration from './views/pages/registration';
import Records from './views/pages/records';
import About from './views/pages/about';
import Error404 from './views/pages/error404';

const Routes = {
   '/': About,
   '/login': Login,
   '/registration': Registration,
   '/trainer': Trainer,
   '/records': Records
};

function router() {
   (async () => {
      const headerContainer = document.getElementsByClassName('header-container')[0],
         contentContainer = document.getElementsByClassName('content-container')[0],
         header = new Header();

      const urlPart = parseCurrentURL(),
         pagePath = `/${urlPart || ''}`,
         page = Routes[pagePath] ? new Routes[pagePath]() : new Error404();

      const pageData = await page.getData();
      contentContainer.innerHTML = await page.render(pageData);

      if (!document.getElementsByClassName('error404')[0]) {
         await page.afterRender();

         headerContainer.innerHTML = await header.render();
         await header.afterRender();
      } else {
         headerContainer.innerHTML = '';
      }
   })();
}

(async () => {
   const footerContainer = document.getElementsByClassName('footer-container')[0],
      footer = new Footer();

   footerContainer.innerHTML = await footer.render();
})();

module.hot ? module.hot.accept(router()) : (window.onload = router);
window.onhashchange = router;