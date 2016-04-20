(function() {
  'use strict';

  Polymer({
    is: 'display-item',

    properties: {
      // forces the dom reflect the dom-if and not hiding.
      // slows a bit perfomance but logically is more correct
      restamp: true
    },

    _isTextOrNumberType: function (type) {
      console.log(type);
      if (type === 'text' || type === 'number')
        return true;
      return false;
    },

    _isDropdown: function (type) {
      console.log(type);
      if (type === 'dropdown')
        return true;
      return false;
    }
  });
})();
