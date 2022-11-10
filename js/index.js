// screen
const screenPROD = document.querySelector('.modal_two-result'),
      valuePROD = document.querySelector('.result_two');

const screenHRS = document.querySelector('.modal-result'),
      valueHRS = document.querySelector('.result');

// input
const inputHRS = document.querySelectorAll('.HRS');
const inputPROD = document.querySelectorAll('.PROD');

// Змінні з продуктивністю та часом для розрахунків
const prod = 400,
      hv = 60;

// Кнопки
const btnHRS = document.querySelector('.start_calc-hrs'),
      btnPROD = document.querySelector('.start_calc-prod'),
      btnCloseHRS = document.querySelector('.finishHRS'),
      btnClosePROD = document.querySelector('.finishPROD');
// Кнопки отримання результату
const resHRS = document.querySelector('#res_HRS'),
      resPROD = document.querySelector('#res_PROD');

// Виклик функцій при кліку
resHRS.addEventListener('click', calcHRS);
resPROD.addEventListener('click', calcPROD);

// Модельки
const modalHRS = document.querySelector('.modal'),
      windowHRS = document.querySelector('.modal-window');
const modalPROD = document.querySelector('.modal_two'),
      windowPROD = document.querySelector('.modal_two-window');

// Функції
// відкриття-закриття модельних вікон
function openModal(openHRS, openPROD, closeHRS, closePROD) {
    document.body.style.overflow = "hidden";
    openHRS.addEventListener('click', e => { 
        e.target = modalHRS.style.visibility = 'visible';
        windowHRS.style.transition = '0.8s';
        windowHRS.style.transform = 'scale(1)';
    });
    openPROD.addEventListener('click', e => {
        e.target = modalPROD.style.visibility = 'visible';
        windowPROD.style.transition = '0.8s all';
        windowPROD.style.transform = 'scale(1)';
    });
    closeHRS.addEventListener('click', e => {
        e.target = modalHRS.style.visibility = 'hidden';
        screenHRS.style.visibility = 'hidden';
        windowHRS.style.transition = '';
        windowHRS.style.transform = 'scale(0.1)';
    });
    closePROD.addEventListener('click', e => {
        e.target = modalPROD.style.visibility = 'hidden';
        screenPROD.style.visibility = 'hidden';
        windowPROD.style.transition = '';
        windowPROD.style.transform = 'scale(0.1)';
    });

}

openModal(btnHRS, btnPROD, btnCloseHRS, btnClosePROD);

// розрахунок HRS

function calcHRS() {
    let x = [];
    inputHRS.forEach(e => {
        x.push(+e.value);
    });
    if (x[0] === 0 && x[1] === 0 || x.length === 0) {
        console.log('err');
    } else {
        let finishRes = (x[0] / prod / x[1] * hv).toFixed(1);
        screenHRS.style.visibility = 'visible';
        
        return valueHRS.textContent = `${finishRes} хв`;
    }       
}

// розрахунок PROD

function calcPROD() {
    let y = [];
    inputPROD.forEach(e => {
        y.push(+e.value);
    });
    if (y[0] === 0 && y[1] === 0  && y[2] === 0 || y.length === 0 || y.length === 1) {
        console.log('err');
    } else {
         let finishRes = (y[0] / (y[2] * y[1]) * 60).toFixed(2);
        screenPROD.style.visibility = 'visible';
    
        return valuePROD.textContent = `${finishRes} одн/год`;
    }
   
}
