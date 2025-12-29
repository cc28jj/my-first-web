document.addEventListener('DOMContentLoaded', () => {

  const loginBtn = document.querySelector('#loginBtn');
  const clearBtn = document.querySelector('#clearBtn');
  const message = document.querySelector('#message');
  const accountInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('#passwordInput');
  const togglePassword = document.querySelector('#togglePassword');

  window.addEventListener('load', () => {
    const saved = localStorage.getItem('userAccount');
    if (saved) {
      accountInput.value = saved;
      message.textContent = "歡迎回來！";
    }
  });

  loginBtn.addEventListener('click', () => {
    if (!accountInput.value || !passwordInput.value) {
      message.textContent = '❌ 請填寫完整';
      message.className = 'message error';
    } else {
      localStorage.setItem('userAccount', accountInput.value);
      message.textContent = '✅ 登入成功！資料已儲存';
      message.className = 'message success';
    }
  });

  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? '🔒' : '👁️';
  });

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('userAccount');
    accountInput.value = "";
    passwordInput.value = "";
    message.textContent = "🧹 已清除記憶";
  });

});
