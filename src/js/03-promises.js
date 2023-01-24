import Notiflix, { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs={
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
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

  let delay = refs.firstDelay.valueAsNumber;
  const delayStepNumber = refs.delayStep.valueAsNumber;
  const amountNumber = refs.amount.valueAsNumber;

  for ( let i = 1; i <= amountNumber; i++) {
    createPromise(i, delay)
    .then(({ i, delay }) => {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${i} in ${delay}ms`
      );
    })
    .catch(({ i, delay }) => {
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(
        `❌ Rejected promise ${i} in ${delay}ms`
      );
    });
    delay += delayStepNumber;
  }
}