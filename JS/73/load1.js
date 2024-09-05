(function () {
    'use strict';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const oldOnLoad = onload;

    /*onload = () => {
      'use strict';
  
      if (oldOnLoad) {
        oldOnLoad();
      }
  
      document.querySelector('#theButton').addEventListener('click', () => console.log('#1 - button was clicked'));
    };*/

    document.addEventListener('DOMContentLoaded', () => {
        'use strict';

        document.querySelector('#theButton').addEventListener('click', () => console.log('#1 - button was clicked'));
    });

}());