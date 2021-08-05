const DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const updateDate = () => {
  const completeDate = new Date();

  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();

  if (CONFIG.show12h) {
    currentTime.innerHTML = `${
      currentHour % 12 == 0 ? "12" : currentHour % 12
    }:${currentMinute}<span id="ampm"></span>`;
    ampm.innerHTML = currentHour > 11 ? "pm" : "am";
  } else {
    currentTime.innerHTML = `${currentHour}:${currentMinute}`;
  }

  currentDate.innerHTML = `${DAYS[currentDay]},
    ${MONTHS[currentMonth]} ${currentNumber}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

updateDate();
