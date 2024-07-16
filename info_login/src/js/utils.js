let users = {};
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

//保存用户数据
function saveUserData(username, password, flow = 0) {
    users[username] = { password: password, flow: flow };
    localStorage.setItem('users', JSON.stringify(users));
}

//获取用户数据
function getUserData(username) {
    return users[username];
}
