angular.module('App')
.component('isPalindromeComp', {
  templateUrl: 'app/containers/isPalindrome/isPalindrome.html',
  controller: IsPalindromeCompCtrl,
  controllerAs: 'isPalindromeComp'
});

function IsPalindromeCompCtrl(DataServices){
  $("input").focus();

  var isPalindromeComp = this;
  isPalindromeComp.input = "abcde";
  isPalindromeComp.answer = null;

  isPalindromeComp.calculate = function(){

    function isPalindrome(str){
      if(str.length<2){
        return true
      } else if(str.charAt(0) != str.charAt(str.length-1)){
        return false
      } else{
        var middle = str.substring(1,str.length-1);
        return isPalindrome(middle);
      }
    }

    isPalindromeComp.answer = isPalindrome(isPalindromeComp.input);
  }

  isPalindromeComp.calculate();

}


IsPalindromeCompCtrl.$inject = ['DataServices'];
