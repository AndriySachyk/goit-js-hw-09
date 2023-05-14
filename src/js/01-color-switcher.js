// 

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEL = document.body;
const timeInterval = 1000;
// btnStop.disabled = true;

let intrl = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



function switchColorBg() {
    const randomColor = getRandomHexColor();

    bodyEL.style.backgroundColor = randomColor;

}





btnStart.addEventListener("click", onRandomColor)
btnStop.addEventListener("click", offRandomColor)

function onRandomColor() {
    btnStart.disabled = true; 
    btnStop.disabled = false;
    intrl = setInterval(switchColorBg, timeInterval);
}



function offRandomColor() {
 btnStart.disabled = false;
 btnStop.disabled = true;
 clearInterval(intrl);
}



