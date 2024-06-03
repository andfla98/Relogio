const mainClock = document.getElementById('main-clock');
const clock1 = document.getElementById('clock1');
const clock2 = document.getElementById('clock2');
const clock3 = document.getElementById('clock3');
const dateElement = document.getElementById('date');

let currentTimeZone = 'America/Sao_Paulo';

function updateClock(timezone) {
  const now = new Date();
  const options = { timeZone: timezone };
  const formattedTime = now.toLocaleTimeString('pt-BR', options);
  const formattedDate = now.toLocaleDateString('pt-BR', options);

  mainClock.textContent = formattedTime;
  dateElement.textContent = formattedDate;
}

function updateSecondaryClocks() {
  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  clock1.textContent = now.toLocaleTimeString('pt-BR', options);
  options.timeZone = 'America/New_York';
  clock2.textContent = now.toLocaleTimeString('pt-BR', options);
  options.timeZone = 'Asia/Tokyo';
  clock3.textContent = now.toLocaleTimeString('pt-BR', options);
}

function changeTimeZone(timezone) {
  currentTimeZone = timezone;
  updateClock(currentTimeZone);
}

const secondaryClocks = document.querySelectorAll('.secondary-clock');

secondaryClocks.forEach(clock => {
  clock.addEventListener('click', () => {
    const timezone = clock.dataset.timezone;
    changeTimeZone(timezone);
  });
});

setInterval(() => {
  updateClock(currentTimeZone);
  updateSecondaryClocks();
}, 1000);

updateClock(currentTimeZone);
updateSecondaryClocks();
