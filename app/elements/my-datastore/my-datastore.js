(function() {
  'use strict';

  Polymer({
    is: 'my-datastore',

    properties: {
      configuration: {
        notify: true, //2way data binding
        value: function () {
          return [
            {
              name: 'buy milk',
              selected: true
            },
            {
              name: 'learn-polymer',
              selected: true
            },
            {
              name: 'clean house',
              selected: false
            }
          ];
        }
      }
    }
  });
})();
