angular
    .module('usersManager.users')
    .controller('DetailItemController', DetailItemController);

DetailItemController.$inject = ['$scope', '$stateParams', '$state', 'utils'];
function DetailItemController($scope, $stateParams, $state, utils) { 
  $scope.item = utils.findById($scope.user.items, $stateParams.itemId);

  $scope.edit = function () {
    $state.go('.edit', $stateParams);
  };
};


