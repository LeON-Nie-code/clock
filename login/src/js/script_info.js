document.addEventListener("DOMContentLoaded", function() {
  // Parse URL parameters
  var urlParams = new URLSearchParams(window.location.search);
  var username = urlParams.get('username');

  // Display username in a specific element
  var usernameElement = document.getElementById('user_name');
  if (usernameElement) {
      usernameElement.textContent = username;
      console.log("Encoded username: " + username);
  }
  else {
      // Display username in the console
      console.log("Username: " + username);
  }
});

function disconnect() {
  // Redirect to login.html
  window.location.href = "index.html";
}
