angular.module('App')
.component('reverseStrComp', {
  templateUrl: 'app/containers/reverseStr/reverseStr.html',
  controller: ReverseStrCompCtrl,
  controllerAs: 'reverseStrComp'
});

function ReverseStrCompCtrl(DataServices){
  $("input").focus();

  var reverseStrComp = this;
  reverseStrComp.input = "abcde";
  reverseStrComp.answer = null;

  reverseStrComp.calculate = function(){

    function reverseStr(str){
      if(str.length<2){
        return str;
      } else{
        return reverseStr(str.substring(1)) + str.charAt(0);
      }
    };

    reverseStrComp.answer = reverseStr(reverseStrComp.input);
  }

  reverseStrComp.calculate();

}


ReverseStrCompCtrl.$inject = ['DataServices'];
