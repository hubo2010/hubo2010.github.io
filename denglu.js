// 注册函数
function register(username, password) {
  // 这里是注册逻辑，你可以根据需求进行具体的实现和处理
  // 返回注册结果
  return "注册成功";
}

// 登录函数
function login(username, password) {
  // 这里是登录逻辑，你可以根据需求进行具体的实现和处理
  // 返回登录结果
  return "登录成功";
}

// 注册表单提交事件处理程序
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 阻止表单提交的默认行为

  // 获取注册表单中的用户名和密码
  const registerUsername = document.getElementById("registerUsername").value;
  const registerPassword = document.getElementById("registerPassword").value;

  // 调用注册函数
  const registerResult = register(registerUsername, registerPassword);

  // 显示注册结果
  alert(registerResult);

  // 清空表单
  document.getElementById("registerUsername").value = "";
  document.getElementById("registerPassword").value = "";
});

// 登录表单提交事件处理程序
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 阻止表单提交的默认行为

  // 获取登录表单中的用户名和密码
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // 调用登录函数
  const loginResult = login(loginUsername, loginPassword);

  // 显示登录结果
  alert(loginResult);

  // 清空表单
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
});