// 1. 定義元件 (注意變數名稱的 n 不要漏掉)
const loginBtn = document.querySelector('#loginBtn');
const clearBtn = document.querySelector('#clearBtn');
const message = document.querySelector('#message');
const accountInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('#passwordInput');
const togglePassword = document.querySelector('#togglePassword');

// 2. 網頁載入時
window.addEventListener('load', () => {
    const saved = localStorage.getItem('userAccount');
    if (saved) {
        accountInput.value = saved;
        message.textContent = "歡迎回來！";
    }
});

// 3. 登入按鈕
loginBtn.addEventListener('click', () => {
    if (!accountInput.value || !passwordInput.value) {
        message.textContent = '❌ 請輸入完整';
        message.className = 'message error';
    } else {
        localStorage.setItem('userAccount', accountInput.value);
        message.textContent = '✅ 登入成功！資料已儲存';
        message.className = 'message success';
    }
});

// 4. 小眼睛切換
togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? '🔒' : '👁️';
});

// 5. 清除按鈕
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('userAccount');
    accountInput.value = "";
    passwordInput.value = "";
    message.textContent = "🧹 已清除記憶";
});