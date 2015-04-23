angular.module('usersManager.utils.service', [

])

.factory('utils', function () {
  var User = function (data) {
    this.id = data.id;
    this.name = data.name;
    this.items = data.items
  };

  return {
    // Util for finding an object by its 'id' property among an array
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id || a[i].name == id) return a[i];
      }
      return null;
    },

    createSpecificObject: function (data) {
      // var user = new User(data);
      // console.log(user);
      return new User(data);
    }

  };

});
