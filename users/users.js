angular.module('usersManager.users', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        // the log-on screen
        .state('login',{
            url : '/login',
            templateUrl : 'users/templates/login.html',
            controller : 'LoginController',
            data: { requireLogin: false }
        })
        //////////////
        // Users //
        //////////////
        .state('users', {
          abstract: true,
          url: '/users',
          
          resolve: {
            users: ['users',
              function( users){
                return users.all();
              }]
          },
          views: {
            '': {
              templateUrl: 'users/templates/users.html',
              controller: 'UsersController'
            },            
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            }
          },
          data: { requireLogin: true }
          
        })

        /////////////////////
        // Users > List //
        /////////////////////
        .state('users.list', {
          url: '',
          data: { requireLogin: true },
          templateUrl: 'users/templates/users.list.html'
        })

        ///////////////////////
        // Users > Detail //
        ///////////////////////
        .state('users.detail', {
          url: '/{contactId:[0-9]{1,4}}',
          data: { requireLogin: true },
          views: {
            '': {
              templateUrl: 'users/templates/users.detail.html',
              controller: 'UsersDetailController'
            },
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            },

            'menuTip': {
              templateProvider: ['$stateParams',
                function (        $stateParams) {
                  return '<hr><small class="muted">Contact ID: ' + $stateParams.contactId + '</small>';
                }]
            }
          }
        })

        //////////////////////////////
        // Contacts > Detail > Item //
        //////////////////////////////

        .state('users.detail.item', {
          url: '/item/:itemId',
          data: { requireLogin: true },
          views: {
            '': {
              templateUrl: 'users/templates/users.detail.item.html',
              controller: 'DetailItemController'
            },
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            }
          }
        })

        /////////////////////////////////////
        // Contacts > Detail > Item > Edit //
        /////////////////////////////////////
        .state('users.detail.item.edit', {
          data: { requireLogin: true },
          views: {
            '@users.detail': {
              templateUrl: 'users/templates/users.detail.item.edit.html',
              controller: 'ItemEditController'
            }
          }
        });
    }
  ]
);
