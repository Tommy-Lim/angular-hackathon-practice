angular.module('App')
.component('bucketSortComp', {
  templateUrl: 'app/containers/bucketSort/bucketSort.html',
  controller: BubbleSortCompCtrl,
  controllerAs: 'bucketSortComp'
});

function BucketSortCompCtrl(DataServices){
  $("input").focus();

  var bucketSortComp = this;
  bucketSortComp.input = "3 5 7 9";
  bucketSortComp.answer = null;

  bucketSortComp.calculate = function(){

    function bucketSort(a){
      var maxx = a[0];
      a.forEach(function(num){
        if(num > maxx){
          maxx = num;
        }
      });
      arr = new Array(maxx + 1);
      a.forEach(function(num){
        if(!arr[num]){
          arr[num] = 1;
        } else{
          arr[num]++;
        }
      })
      a = [];
      arr.forEach(function(num, index){
        if(num > 0){
          for(var i = 0; i<arr[num]; i++){
            a = a.concat([index])
          }
        }
      })
      return a;
    };


    bucketSortComp.answer = bucketSort(DataServices.stringToArray(bucketSortComp.input));
  }

  bucketSortComp.calculate();

}


BucketSortCompCtrl.$inject = ['DataServices'];
