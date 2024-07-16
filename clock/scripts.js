date_of_clock = new Date();



function updateClock() {


  date_of_clock.setSeconds(date_of_clock.getSeconds() + 1);
  const seconds_of_clock = date_of_clock.getSeconds();
  const minutes_of_clock = date_of_clock.getMinutes();
  const hours_of_clock = date_of_clock.getHours();




  const secondAngle = hours_of_clock * 60 * 360 + minutes_of_clock * 360 + seconds_of_clock * 6;
  const minuteAngle = hours_of_clock * 360 + minutes_of_clock * 6 + seconds_of_clock * 0.1;
  const hourAngle = hours_of_clock * 30 + minutes_of_clock * 0.5;

  document.getElementById('second').style.transform = `rotate(${secondAngle}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourAngle}deg)`;

  const digitalTime = document.getElementById('digitalTime');
  digitalTime.textContent = `${hours_of_clock.toString().padStart(2, '0')}:${minutes_of_clock.toString().padStart(2, '0')}:${seconds_of_clock.toString().padStart(2, '0')}`;
}

function setTime() {
  const hours = parseInt(document.getElementById('hourInput').value);
  const minutes = parseInt(document.getElementById('minuteInput').value);
  const seconds = parseInt(document.getElementById('secondInput').value);


  if (isNaN(hours) || hours < 0 || hours > 23) {
    alert('Invalid hours');
    return;
  }

  if (isNaN(minutes) || minutes < 0 || minutes > 59) {
    alert('Invalid minutes');
    return;
  }

  if (isNaN(seconds) || seconds < 0 || seconds > 59) {
    alert('Invalid seconds');
    return;
  }

  console.log(hours, minutes, seconds);

  date_of_clock.setHours(hours);
  date_of_clock.setMinutes(minutes);
  date_of_clock.setSeconds(seconds);


}

function resetTime() {
  const now = new Date();
  date_of_clock.setHours(now.getHours());
  date_of_clock.setMinutes(now.getMinutes());
  date_of_clock.setSeconds(now.getSeconds());
  console.log('Time reset');
}



document.getElementById('setTime').addEventListener('click', setTime);
document.getElementById('resetTime').addEventListener('click', resetTime);

setInterval(updateClock, 1000);
updateClock();