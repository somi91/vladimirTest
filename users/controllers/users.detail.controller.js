angular
    .module('usersManager.users')
    .controller('UsersDetailController', UsersDetailController);

UsersDetailController.$inject = ['$scope', '$stateParams', 'utils'];
function UsersDetailController($scope, $stateParams, utils) {
  $scope.user = utils.findById($scope.users, $stateParams.contactId);
  console.log($scope.user);
};


