angular.module('App')
.service('DataServices', DataServices);

function DataServices(){

  this.stringToArray = function(str){
    str = str.replace(/\[/g," ");
    str = str.replace(/\]/g," ");
    str = str.replace(/\,/g," ");

    var array = str.split(" ").map(function(item){
      return parseInt(item);
    })

    var newArray = [];

    array.forEach(function(item){
      if(isNaN(item)){
        //do nothing
      } else{
        newArray.push(item);
      }
    })

    return newArray;
  }

  this.arrayOfFunctions = function(){

    return [
      "findSum",
      "largestInt",
      "smallestInt",
      "factorialize",
      "mergeTwoSorted",
      "minimumDifference",
      "calculator",
      "bubbleSort",
      "bucketSort",
      "selectionSort",
      "insertionSort",
      "mergeSort"
    ]

  }



}

DataServices.$inject = [];
