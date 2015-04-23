angular.module('usersManager.users.service', [

])

// A RESTful factory for retrieving users from 'users.json'
.factory('users', ['$http', 'utils', function ($http, utils) {
  var path = 'users.json';
  var arrayOfUsers = [];
  var users = $http.get(path).then(function (resp) {
    angular.forEach(resp.data.users, function(value, key) {
      this.push(utils.createSpecificObject(value));
    }, arrayOfUsers);
    return arrayOfUsers;
  });

  var factory = {};
  factory.all = function () {
    return users;
  };
  factory.get = function (id) {
    return users.then(function(){
      return utils.findById(arrayOfUsers, id);
    })
  };
  return factory;
}]);
