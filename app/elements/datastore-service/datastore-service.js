(function() {
  'use strict';

  Polymer({
    is: 'datastore-service',

    properties: {
      configuration: {
        notify: true //2way data binding
      }
    },

    _handleResponse: function (e) {
      this.configuration = e.detail.response;
    },

    _requestData: function () {
      this.$.ajax.generateRequest();
    }
  });
})();
