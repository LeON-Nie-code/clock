
//在打开页面的时候，检测用户名是否为空，如果为空则隐藏account图标
function hide_account_detect() {

  var usernameInput = document.getElementById('username');
  if (usernameInput.value === "") {
    console.log("Input is empty");
  } else {
    console.log("Input is not empty");
    document.getElementById("account").style.display = "none";
  }

}

window.onload = function () {
  hide_account_detect();

}

//用户名密码记录与验证
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("用户名或密码不能为空！");
    return;
  }

  const user = getUserData(username);
  if (user) {
    if (user.password === password) {
      localStorage.setItem('currentUser', username);
      var encodedUsername = encodeURIComponent(username);
      window.location.href = "info.html";
    } else {
      alert("密码错误, 正确密码为" + user.password);
    }
  } else {
    saveUserData(username, password);
    localStorage.setItem('currentUser', username);
    var encodedUsername = encodeURIComponent(username);
    window.location.href = "info.html";
  }

}

function hide_account() {
  document.getElementById("account").style.display = "none";
}
