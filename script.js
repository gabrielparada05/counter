const increaseBtnEl = document.querySelector('.counter_button--increase');
const decreaseBtnEl = document.querySelector('.counter_button--decrease');
const resetBtnEl = document.querySelector('.counter_reset-button');
const counterEl = document.querySelector('.counter_value');
const counterBoxEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter_title');


const increaseCounter = () => {
    const currentValue = counterEl.textContent;
    const currentValueAsNumber = +currentValue;
    const newValue = currentValueAsNumber + 1;
    counterEl.textContent = newValue;

    if (newValue > 5) {
        counterBoxEl.style.backgroundColor = 'red'
    } else {
        counterBoxEl.style.backgroundColor = '#bef227'
    }
};

const decreaseCounter = () => {
    const currentValue = counterEl.textContent;
    const currentValueAsNumber = +currentValue;
    if (currentValueAsNumber > 0) {
        newValue = currentValueAsNumber - 1}
     else {
        newValue = 0
     }
    counterEl.textContent = newValue;

    if (newValue > 5) {
        counterBoxEl.style.backgroundColor = 'red'
    } else {
        counterBoxEl.style.backgroundColor = '#bef227'
    }
};


increaseBtnEl.addEventListener('click', increaseCounter)

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      increaseCounter();
    }
  });

decreaseBtnEl.addEventListener('click', decreaseCounter)

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
      decreaseCounter();
    }
  });

resetBtnEl.addEventListener('click', function (){
    counterEl.textContent = 0;
    counterBoxEl.style.backgroundColor = '#bef227'

});