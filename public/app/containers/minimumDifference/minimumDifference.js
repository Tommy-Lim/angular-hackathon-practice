angular.module('App')
.component('minimumDifferenceComp', {
  templateUrl: 'app/containers/minimumDifference/minimumDifference.html',
  controller: minimumDifferenceCompCtrl,
  controllerAs: 'minDiff'
});

function minimumDifferenceCompCtrl(DataServices) {
  $("input").focus();

  var minDiff = this;
  minDiff.input = "8 10 14 23 38";
  minDiff.answer = null;

  minDiff.calculate = function(){
    function minimumDifference(array){
      if (array.length < 2) {
        return false
      }
      var smallest = array[1] - array[0];
      for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
          if (i !== j) {
            var diff = array[i] - array[j];
            diff = Math.abs(diff);
            smallest = Math.min(diff, smallest);
          }
        }
      }
      return smallest;
    };


    minDiff.answer = minimumDifference(DataServices.stringToArray(minDiff.input));
  }

  minDiff.calculate();

}


minimumDifferenceCompCtrl.$inject = ['DataServices'];
