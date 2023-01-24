import Notiflix, { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs={
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.form.addEventListener('submit',onSubmitCreatePromis);

function createPromise(position, delay) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      } 
    },delay);
  });
 
}


function onSubmitCreatePromis(e) {
  e.preventDefault();

  let delayInput = refs.delay.valueAsNumber;
  const delayStepNumber = refs.step.valueAsNumber;
  const amountNumber = refs.amount.valueAsNumber;

  for ( let position = 1; position <= amountNumber; position++) {
    createPromise(position, delayInput)
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(
        `❌ Rejected promise ${position} in ${delay}ms`
      );
    });
    delayInput += delayStepNumber;
  }
}