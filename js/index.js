// screen
const screenPROD = document.querySelector('.modal_two-result'),
      valuePROD = document.querySelector('.result_two');
const screenHRS = document.querySelector('.modal-result'),
      valueHRS = document.querySelector('.result');

// input
const inputHRS = document.querySelectorAll('.HRS');
const inputPROD = document.querySelectorAll('.PROD');

// Змінні з продуктивністю та часом для розрахунків
let prod = 400,
    hv = 60;

// Кнопки
const btnHRS = document.querySelector('.start_calc-hrs'),
      btnPROD = document.querySelector('.start_calc-prod'),
      btnCloseHRS = document.querySelector('.finishHRS'),
      btnClosePROD = document.querySelector('.finishPROD');
// Кнопки отримання результату
const resHRS = document.querySelector('#res_HRS'),
      resPROD = document.querySelector('#res_PROD');
resHRS.addEventListener('click', calcHRS);
resPROD.addEventListener('click', calcPROD);

// Модельки
const modalHRS = document.querySelector('.modal');
const modalPROD = document.querySelector('.modal_two');

// Функції
// відкриття-закриття модельних вікон
function openModal(openHRS, openPROD, closeHRS, closePROD) {
    openHRS.addEventListener('click', e => {
        e.target = modalHRS.style.visibility = 'visible';
    });
    openPROD.addEventListener('click', e => {
        e.target = modalPROD.style.visibility = 'visible';
    });
    closeHRS.addEventListener('click', e => {
        e.target = modalHRS.style.visibility = 'hidden';
        screenHRS.style.visibility = 'hidden';
    });
    closePROD.addEventListener('click', e => {
        e.target = modalPROD.style.visibility = 'hidden';
        screenPROD.style.visibility = 'hidden';
    });

}

openModal(btnHRS, btnPROD, btnCloseHRS, btnClosePROD);

// розрахунок HRS

function calcHRS() {
    let x = [];
    inputHRS.forEach(e => {
        x.push(+e.value);
    });
    let finishRes = (x[0] / prod / x[1] * hv).toFixed(1);
    screenHRS.style.visibility = 'visible';
    return valueHRS.textContent = `${finishRes} хв`;
}

// розрахунок PROD

function calcPROD() {
    let y = [ ];
    inputPROD.forEach(e => {
        y.push(+e.value);
    });
    let finishRes = (y[0] / (y[2] * y[1]) * 60).toFixed(2);
    screenPROD.style.visibility = 'visible';
    return valuePROD.textContent = `${finishRes} одн/год`;
}
