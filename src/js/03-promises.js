import Notiflix from 'notiflix';



const form = document.querySelector('form');
const btmSubmit = document.querySelector('button');


form.addEventListener('submit', onSubmitForm)

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
    }, delay) })  
}

function onSubmitForm(even) {
  even.preventDefault();
  btmSubmit.disabled = true;
  const { elements: { step, amount, delay } } = even.currentTarget;
  const promises = [];
  for (let i = 1; i <= amount.valueAsNumber; i++) {
    const newDelay = delay.valueAsNumber + ((i - 1) * step.valueAsNumber);
    promises.push(createPromise(i, newDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }));
    
  }
Promise.all(promises)
  .finally(() => { btmSubmit.disabled = false })
}
