angular.module('App')
.component('bubbleSortComp', {
  templateUrl: 'app/containers/bubbleSort/bubbleSort.html',
  controller: BubbleSortCompCtrl,
  controllerAs: 'bubbleSortComp'
});

function BubbleSortCompCtrl(DataServices){
  $("input").focus();

  var bubbleSortComp = this;
  bubbleSortComp.input = "3 5 4 3 7";
  bubbleSortComp.answer = null;

  bubbleSortComp.calculate = function(){

    function bubbleSort(a){
      var sorting = true;
      while(sorting){
        var swaps = 0;
        for(var i = 1; i <= a.length; i++){
          if(a[i] < a[i-1]){
            swaps += 1;
            temp = a[i];
            a[i] = a[i-1];
            a[i-1] = temp;
          }
          if(i == a.length-1 && swaps==0){
            sorting = false;
          }
        }
      }
      return a;
    };


    bubbleSortComp.answer = bubbleSort(DataServices.stringToArray(bubbleSortComp.input));
  }

  bubbleSortComp.calculate();

}


BubbleSortCompCtrl.$inject = ['DataServices'];
