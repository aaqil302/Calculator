document.addEventListener('DOMContentLoaded', function(){
  const calculator = document.querySelector('.container');
  const keys = calculator.querySelector('.button');
  const display = calculator.querySelector('.screen');
console.log(display.value)
  keys.addEventListener('click', function(event){
    
    const target =  event.target;
    const value = target.value;
    console.log(value)
    if(!target.matches('button')){
      return;
    }else{
      if(value === '+'){
        display.value +=  `${value}`;
      }
      else if(value === '-'){
        display.value +=  `${value}`;
      }
      else if(value === '*'){
        display.value +=  `${value}`;
      }
      else if(value === '/'){
        display.value +=  `${value}`;
      }
      else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (value === 'all-clear') {
        display.value = '';
    } else {
        display.value += value;
    }
    }
  })
})