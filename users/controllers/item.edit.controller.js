angular
    .module('usersManager.users')
    .controller('ItemEditController', ItemEditController);

ItemEditController.$inject = ['$scope', '$stateParams', '$state', 'utils'];
function ItemEditController($scope, $stateParams, $state, utils) { 
  $scope.item = utils.findById($scope.user.items, $stateParams.itemId);
  $scope.done = function () {
    $state.go('^', $stateParams);
  };
};


