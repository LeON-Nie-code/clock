secondAngleOfClock = 0;
minuteAngleOfClock = 0;
hourAngleOfClock = 0;

date_of_clock = new Date();

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  date_of_clock.setSeconds(date_of_clock.getSeconds() + 1);
  const seconds_of_clock = date_of_clock.getSeconds();
  const minutes_of_clock = date_of_clock.getMinutes();
  const hours_of_clock = date_of_clock.getHours();
  
  

  if(seconds == 0)
  {
    const secondAngle = seconds * 6;

  }
  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;

  const digitalTime = document.getElementById('digitalTime');
  digitalTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function setTime() {
  const hours = parseInt(document.getElementById('hourInput').value) || 0;
  const minutes = parseInt(document.getElementById('minuteInput').value) || 0;
  const seconds = parseInt(document.getElementById('secondInput').value) || 0;
  
  const now = new Date();
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(seconds);

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;

  const digitalTime = document.getElementById('digitalTime');
  digitalTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTime() {
  document.getElementById('hourInput').value = '';
  document.getElementById('minuteInput').value = '';
  document.getElementById('secondInput').value = '';
}



document.getElementById('setTime').addEventListener('click', setTime);

setInterval(updateClock, 1000);
updateClock();