angular
    .module('usersManager.users')
    .controller('UsersController', UsersController);

UsersController.$inject = ['$scope', '$state', 'users'];
function UsersController($scope, $state, users) { 
  console.log(users);
  $scope.users = users;

};


