function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

const bgColor = function () {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.body.style.color = getRandomHexColor();
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStoptBtn);

function onStartBtn() {
  timerId = setInterval(bgColor, 1000);
  refs.startBtn.disabled = true;
}
function onStoptBtn() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}
