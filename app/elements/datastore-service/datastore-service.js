(function() {
  'use strict';

  Polymer({
    is: 'datastore-service',

    properties: {
      configuration: {
        type: Array,
        notify: true, //2way data binding,
      }
    },

    observers: [
      '_configurationChanged(configuration.*)'
    ],

    _handleResponse: function (e) {
      if(localStorage.configuration){
        this.configuration = JSON.parse(localStorage.configuration).base;
      } else {
        this.configuration = e.detail.response;
        localStorage.configuration = JSON.stringify(this.configuration);
      }
    },

    _configurationChanged: function(newValue, oldValue) {
       console.log('_configurationChanged datastore-service');

       localStorage.configuration = JSON.stringify(newValue);
     }
  });
})();
