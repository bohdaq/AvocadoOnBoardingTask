(function() {
  'use strict';

  Polymer({
    is: 'config-view',

    _filter: function(val) {
      return function(item) {
        if (!val) return true;
        if (!item) return false;
        return (item.name && ~item.name.indexOf(val));
      };
    }
  });
})();
