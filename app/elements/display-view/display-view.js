(function() {
  'use strict';

  Polymer({
    is: 'display-view',

    filterBy: {
      type: String
    },

    _filter: function (filterBy) {
      return function (todo) {
        if(filterBy === 'selected') {
          return todo.selected;
        }
        else {
          return false;
        }
      };
    }
  });
})();
