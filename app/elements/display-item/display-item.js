(function() {
  'use strict';

  Polymer({
    is: 'display-item',

    properties: {
      // forces the dom reflect the dom-if and not hiding instead.
      // slows a bit perfomance but logically is more correct
      restamp: true
    },

    _isText: function (type) {
      return type === 'text';
    },

    _isNumber: function (type) {
      return type === 'number';
    },

    _isDropdown: function (type) {
      return type === 'dropdown';
    },

    _isDatepicker: function (type) {
      return type === 'datepicker';
    },

    _isMoneypicker: function (type) {
      return type === 'moneypicker';
    }
  });
})();
