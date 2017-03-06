angular.module('App')
.component('bucketSortComp', {
  templateUrl: 'app/containers/bucketSort/bucketSort.html',
  controller: BucketSortCompCtrl,
  controllerAs: 'bucketSortComp'
});

function BucketSortCompCtrl(DataServices){
  $("input").focus();

  var bucketSortComp = this;
  bucketSortComp.input = "3 5 2 1 7 3";
  bucketSortComp.answer = null;

  bucketSortComp.calculate = function(){

    function bucketSort(a){
      if(a && a.length>1){
        var counts = [];
        a.forEach(function(num){
          if(!counts[num]){
            counts[num] = 1;
          } else{
            counts[num] +=1;
          }
        })
        a = [];
        for(i =0; i< counts.length; i++){
          if(counts[i] > 0){
            var numArray = Array(counts[i]).fill(i)
            a = a.concat(numArray);
          }
        }
        return a;
      } else{
        return a;
      }
    };


    bucketSortComp.answer = bucketSort(DataServices.stringToArray(bucketSortComp.input));
  }

  bucketSortComp.calculate();

}


BucketSortCompCtrl.$inject = ['DataServices'];
