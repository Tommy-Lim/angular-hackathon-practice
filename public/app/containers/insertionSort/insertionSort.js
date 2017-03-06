angular.module('App')
.component('insertionSortComp', {
  templateUrl: 'app/containers/insertionSort/insertionSort.html',
  controller: InsertionSortCompCtrl,
  controllerAs: 'insertionSortComp'
});

function InsertionSortCompCtrl(DataServices){
  $("input").focus();

  var insertionSortComp = this;
  insertionSortComp.input = "8 5 7 1 9 3";
  insertionSortComp.answer = null;

  insertionSortComp.calculate = function(){

    function insertionSort(a){
      if(a && a.length >1){
        for(var i = 1; i < a.length; i++){
          var index = i;
          while(a[index] < a[index-1]){
            var temp = a[index];
            a[index] = a[index-1];
            a[index-1] = temp;
            index -=1;
          }
        }
        return a;
      } else{
        return a;
      }
    };


    insertionSortComp.answer = insertionSort(DataServices.stringToArray(insertionSortComp.input));
  }

  insertionSortComp.calculate();

}


InsertionSortCompCtrl.$inject = ['DataServices'];
