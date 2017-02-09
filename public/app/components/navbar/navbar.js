angular.module('App')
.component('navbarComp', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarCompCtrl,
  controllerAs: 'navbarComp'
});

function NavbarCompCtrl(DataServices){
  var navbarComp = this;

  console.log("Welcome to Wolfram|Beta!")

  navbarComp.functions = DataServices.arrayOfFunctions();
}

NavbarCompCtrl.$inject = ['DataServices'];
