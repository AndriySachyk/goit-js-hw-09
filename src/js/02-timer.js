// // Описаний в документації
import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';


const refs = {
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

const TIMER_INTERVAL = 1000;

let interval = null;


refs.btnStart.addEventListener('click', onStartTimer)


const flatPickr = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const nowDate = new Date().getTime();
    if (selectedDate < nowDate) {
      Notiflix.Notify.failure("Please choose a date in the future");    
    }

    else {
      refs.btnStart.disabled = false;
    }
},
});



function onStartTimer() {
  createTimer()
  refs.btnStart.disabled = true;
}

function createTimer() {
  interval = setInterval(updateTimer, TIMER_INTERVAL)
}


function offTimer() {
  clearInterval(interval);
}

function calculateDate() {
  const selectedDate = flatPickr.selectedDates[0].getTime();
  const now = new Date();
  const timeDifference = selectedDate - now;
  const timeLeftObj = convertMs(timeDifference);
  if (timeDifference < TIMER_INTERVAL) {
    offTimer();
  }
  return timeLeftObj;
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor(
    (((ms % day) % hour) % minute) / second
  ));

  return { days, hours, minutes, seconds };
}


function updateTimer() {
  const timeLeftValue = calculateDate();
  refs.days.textContent = timeLeftValue.days;
  refs.hours.textContent = timeLeftValue.hours;
  refs.minutes.textContent = timeLeftValue.minutes;
  refs.seconds.textContent = timeLeftValue.seconds;
}


function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

