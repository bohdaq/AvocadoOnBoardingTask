(function() {
  'use strict';

  Polymer({
    is: 'router-conf',
    properties: {
        displayActive: {
          type: Boolean,
          value: false,
          notify: true
        },
        configurationActive: {
          type: Boolean,
          value: false,
          notify: true
        }
    },
    attached: function() {
        if (!this.route.path) {
          this.set('route.path', '#/configuration');
        }
      },
  });
})();
