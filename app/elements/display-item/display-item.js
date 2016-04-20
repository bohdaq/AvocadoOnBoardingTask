(function() {
  'use strict';

  Polymer({
    is: 'display-item',

    properties: {
      // forces the dom reflect the dom-if and not hiding instead.
      // slows a bit perfomance but logically is more correct
      restamp: true
    },

    _isTextOrNumberType: function (type) {
      if (type === 'text' || type === 'number')
        return true;
      return false;
    },

    _isDropdown: function (type) {
      if (type === 'dropdown')
        return true;
      return false;
    },

    _isDatepicker: function (type) {
      if (type === 'datepicker')
        return true;
      return false;
    }
  });
})();
