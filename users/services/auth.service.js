angular
    .module('usersManager')
    .factory('authService', authService);

authService.$inject = [];
function authService() { 
  return { isLoggedIn : false};
	
}


