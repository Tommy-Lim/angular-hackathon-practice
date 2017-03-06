angular.module('App')
.component('mergeSortComp', {
  templateUrl: 'app/containers/mergeSort/mergeSort.html',
  controller: MergeSortCompCtrl,
  controllerAs: 'mergeSortComp'
});

function MergeSortCompCtrl(DataServices){
  $("input").focus();

  var mergeSortComp = this;
  mergeSortComp.input = "3 5 4 3 7 12 1";
  mergeSortComp.answer = null;

  mergeSortComp.calculate = function(){

    function mergeSort(a){
      if(a.length <2){
        return a;
      }

      var middle = Math.floor(a.length/2);
      var left = a.slice(0,middle);
      var right = a.slice(middle);

      return merge(mergeSort(left), mergeSort(right));

    }

    function merge(left, right){
      var result = [];
      var il = 0;
      var ir = 0;

      while(il<left.length && ir<right.length){
        if(left[il]<right[ir]){
          result.push(left[il])
          il++;
        } else{
          result.push(right[ir]);
          ir++;
        }
      }
      result = result.concat(left.slice(il)).concat(right.slice(ir));

      return result;
    }


    mergeSortComp.answer = mergeSort(DataServices.stringToArray(mergeSortComp.input));
  }

  mergeSortComp.calculate();

}


MergeSortCompCtrl.$inject = ['DataServices'];
