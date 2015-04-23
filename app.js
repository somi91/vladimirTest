// Make sure to include the `ui.router` module as a dependency
angular.module('usersManager', [
  'usersManager.users',
  'usersManager.users.service',
  'usersManager.utils.service',
  'ui.router'
])

.run(
  [          '$rootScope', '$state', '$stateParams', 'authService',
    function ($rootScope,   $state,   $stateParams,   authService) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        
        var shouldLogin = toState.data !== undefined
                      && toState.data.requireLogin 
                      && !authService.isLoggedIn;
        
        // NOT authenticated - wants any private stuff
        if(shouldLogin)
        {
          $state.go('login');
          event.preventDefault();
          return;
        }

        // authenticated (previously)
        if(authService.isLoggedIn) 
        {
          return;        
        }      
        
        // unmanaged
      });
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
      $urlRouterProvider
        .when('/u?id', '/users/:id')
        .when('/user/:id', '/users/:id')

        .otherwise('/');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      $stateProvider

        //////////
        // Home //
        //////////

        .state("home", {

          url: "/",
          template: '<p class="lead">Welcome to Comtrade test solution</p>' +
            '<p>Use the menu above to navigate. ' +
            'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'

        })

        .state('logout', {
          url: '/logout',
          controller: function($scope, $window, authService) {
            authService.isLoggedIn = false;
            // $window.location.reload();
            $window.location.href = '#/login';
            // $route.reload();
          }
        })

        ///////////
        // About //
        ///////////

        .state('about', {
          url: '/about',

          templateProvider: ['$timeout',
            function (        $timeout) {
              return $timeout(function () {
                return '<p class="lead">Some random text</p>' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
              }, 100);
            }]
        })
    }
  ]
);
