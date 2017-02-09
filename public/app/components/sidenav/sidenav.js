angular.module('App')
.component('sidenavComp', {
  templateUrl: 'app/components/sidenav/sidenav.html',
  controller: SidenavCompCtrl,
  controllerAs: 'sidenavComp'
});

function SidenavCompCtrl($rootScope, $state, $stateParams, DataServices){
  var sidenavComp = this;

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;


  sidenavComp.isHome = function(){
    if($rootScope.$state.current.name == 'homeState'){
      return true;
    } else{
      return false;
    }
  }

  sidenavComp.isHome();

  sidenavComp.functions = DataServices.arrayOfFunctions();
}

SidenavCompCtrl.$inject = ['$rootScope', '$state', '$stateParams', 'DataServices'];
