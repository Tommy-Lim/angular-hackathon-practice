angular.module('App')
.component('insertionSortComp', {
  templateUrl: 'app/containers/insertionSort/insertionSort.html',
  controller: InsertionSortCompCtrl,
  controllerAs: 'insertionSortComp'
});

function InsertionSortCompCtrl(DataServices){
  $("input").focus();

  var insertionSortComp = this;
  insertionSortComp.input = "3 5 7 9";
  insertionSortComp.answer = null;

  insertionSortComp.calculate = function(){

    function insertionSort(a){
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


    insertionSortComp.answer = insertionSort(DataServices.stringToArray(insertionSortComp.input));
  }

  insertionSortComp.calculate();

}


InsertionSortCompCtrl.$inject = ['DataServices'];
