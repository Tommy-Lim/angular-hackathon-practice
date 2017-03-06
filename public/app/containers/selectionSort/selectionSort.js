angular.module('App')
.component('selectionSortComp', {
  templateUrl: 'app/containers/selectionSort/selectionSort.html',
  controller: SelectionSortCompCtrl,
  controllerAs: 'selectionSortComp'
});

function SelectionSortCompCtrl(DataServices){
  $("input").focus();

  var selectionSortComp = this;
  selectionSortComp.input = "3 5 7 9 0 1";
  selectionSortComp.answer = null;

  selectionSortComp.calculate = function(){

    function selectionSort(a){
      for(var i = 0; i < a.length; i++){
        var minVal = a[i];
        var index = i;
        for(var j = i+1; j < a.length; j++){
          if(a[j] < minVal){
            index = j;
            minVal = a[j];
          }
        }
        a[index] = a[i];
        a[i] = minVal;
      }
      return a;
    };


    selectionSortComp.answer = selectionSort(DataServices.stringToArray(selectionSortComp.input));
  }

  selectionSortComp.calculate();

}


SelectionSortCompCtrl.$inject = ['DataServices'];
