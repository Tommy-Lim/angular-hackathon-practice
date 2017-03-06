angular.module('App')
.component('calculatorComp', {
  templateUrl: 'app/containers/calculator/calculator.html',
  controller: CalculatorCompCtrl,
  controllerAs: 'calculatorComp'
})

function CalculatorCompCtrl(){
  var calculatorComp = this;

  // DECLARE VARIABLES
  calculatorComp.firstArg = '';
  calculatorComp.secondArg = '';
  calculatorComp.onFirstArg = true;
  calculatorComp.onSecondArg = false;
  calculatorComp.operator = '';
  calculatorComp.calcString = 0;

  //DECLARE FUNCTIONS
  calculatorComp.numberClick = function(num){
    if(calculatorComp.onFirstArg){
      if(calculatorComp.calcString=="Infinity"){
        calculatorComp.firstArg = "" + num;
        calculatorComp.calcString = calculatorComp.firstArg;
      } else{
        calculatorComp.firstArg = num;
        calculatorComp.calcString = calculatorComp.firstArg;
      }
    } else if(calculatorComp.onSecondArg){
      calculatorComp.secondArg = calculatorComp.secondArg + num;
      calculatorComp.calcString = calculatorComp.secondArg;
    }
  };

  calculatorComp.operatorClicked = function(operator){
    if(calculatorComp.operator===''){
      calculatorComp.onFirstArg = false;
      calculatorComp.onSecondArg = true;
      calculatorComp.operator = operator;
    } else{
      if(!calculatorComp.secondArg){
        calculatorComp.onFirstArg = false;
        calculatorComp.onSecondArg = true;
        calculatorComp.operator = operator;
      } else{
        calculatorComp.calculate();
        calculatorComp.onFirstArg = false;
        calculatorComp.onSecondArg = true;
        calculatorComp.operator = operator;
      }
    }

  };

  calculatorComp.calculate = function(){
    if(calculatorComp.operator === ''){
      //do nothing
    } else if(calculatorComp.operator == '/'){
      calculatorComp.calcString = calculatorComp.toNumber(calculatorComp.firstArg) / calculatorComp.toNumber(calculatorComp.secondArg);
    } else if(calculatorComp.operator == '*'){
      calculatorComp.calcString = calculatorComp.toNumber(calculatorComp.firstArg) * calculatorComp.toNumber(calculatorComp.secondArg);
    } else if(calculatorComp.operator == '+'){
      calculatorComp.calcString = calculatorComp.toNumber(calculatorComp.firstArg) + calculatorComp.toNumber(calculatorComp.secondArg);
    } else if(calculatorComp.operator == '-'){
      calculatorComp.calcString = calculatorComp.toNumber(calculatorComp.firstArg) - calculatorComp.toNumber(calculatorComp.secondArg);
    }

    calculatorComp.resetAfterCalc();
  };

  calculatorComp.resetAfterCalc = function(){
    calculatorComp.firstArg = calculatorComp.calcString;
    calculatorComp.secondArg = '';
    calculatorComp.onFirstArg = true;
    calculatorComp.onSecondArg = false;
    calculatorComp.operator = '';
  };

  calculatorComp.clear = function(){
    calculatorComp.firstArg = '';
    calculatorComp.secondArg = '';
    calculatorComp.onFirstArg = true;
    calculatorComp.onSecondArg = false;
    calculatorComp.operator = '';
    calculatorComp.calcString = 0;
  };

  calculatorComp.toNumber = function(num){
    return parseFloat(num, 10);
  };

}

CalculatorCompCtrl.$inject = [];
