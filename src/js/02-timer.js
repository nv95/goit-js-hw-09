// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";



const refs = {
  startBtn: document.querySelector('button[data-start]'),
  dataTimePicker: document.getElementById('datetime-picker'),
  d: document.querySelector('span[data-days]'),
  h: document.querySelector('span[data-hours]'),
  m: document.querySelector('span[data-minutes]'),
  s: document.querySelector('span[data-seconds]'),
};

let timer = null;
refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      if(selectedDates[0] < new Data()){
        refs.startBtn.disabled = true;
        // window.alert('Please choose a date in the future');
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }
      if(selectedDates[0] > new Date()){
        refs.startBtn.disabled = false;
      }

      refs.startBtn.addEventListener('click', () =>{
        timer = setInterval(()=>{
            const differenceTime = selectedDates[0] - new Date();

            if(differenceTime < 1000){
             clearInterval(timer);
            }

            const result = convertMs(differenceTime);
            viewOfTimer(result);
        },1000)
      });
    },
};
flatpickr('#datetime-picker', options);

function viewOfTimer({ days, hours, minutes, seconds }){
    refs.d.textContent = `${days}`;
    refs.h.textContent = `${hours}`;
    refs.m.textContent = `${minutes}`;
    refs.s.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
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
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
