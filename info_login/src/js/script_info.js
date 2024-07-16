let connectedTime = 0;
let maxFlow = 50;
const flowPerSecond = 3.33;
let flowUsed = 0;

//已连接时间自增与记录
function updateTime() {
  connectedTime++;
  document.getElementById('time').innerText = new Date(connectedTime * 1000).toISOString().substr(11, 8);
}

//已用流量自增与记录
function updateFlow() {
  const currentUser = localStorage.getItem('currentUser');
  const user = getUserData(currentUser);
  flowUsed = user.flow;
  if (flowUsed < maxFlow) {
    flowUsed = Math.min(flowUsed + flowPerSecond, maxFlow);
    user.flow = flowUsed;
    localStorage.setItem('users', JSON.stringify(users));
  }
  document.getElementById('flow').innerText = `${flowUsed.toFixed(2)} GB`;

  document.getElementById('usage_value').style.width = `${(flowUsed / maxFlow) * 105}px`;
}

function startCounting() {
  setInterval(updateTime, 1000);
  setInterval(updateFlow, 1000);
}

function setFlow() {
  const currentUser = localStorage.getItem('currentUser');
  const user = getUserData(currentUser);
  flowUsed = user.flow
  document.getElementById('flow').innerText = `${flowUsed.toFixed(2)} GB`;
  document.getElementById('usage_value').style.width = `${(flowUsed / maxFlow) * 105}px`;

}

window.onload = function () {
  setFlow();
  startCounting();

}


document.addEventListener("DOMContentLoaded", function () {


  const currentUser = localStorage.getItem('currentUser');

  // Display username in a specific element
  var usernameElement = document.getElementById('user_name');
  if (usernameElement) {
    usernameElement.textContent = currentUser;
    console.log("Encoded username: " + currentUser);
  }

});

function disconnect() {
  // Redirect to login.html
  window.location.href = "index.html";
}
