function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
      alert("用户名或密码不能为空！");
  } else {
      // Encode username to handle special characters in URL
      var encodedUsername = encodeURIComponent(username);
      console.log("Encoded username: " + encodedUsername);
      // Redirect to homework1.html with username as URL parameter
      window.location.href = "info.html?username=" + encodedUsername;
  }
}

function hide_account() {
  document.getElementById("account").style.display = "none";
}
