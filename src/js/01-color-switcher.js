


const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEL = document.body;
const timeInterval = 1000;

let intrl = null;
btnStop.disabled = true;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function switchColorBg() {
    const randomColor = getRandomHexColor();

    bodyEL.style.backgroundColor = randomColor;

}





btnStop.addEventListener("click", offRandomColor)
btnStart.addEventListener("click", onRandomColor)

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



