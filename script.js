const loginBtn = document.querySelector('#loginBtn');
const clearBtn = document.querySelector('#clearBtn');
const message = document.querySelector('#message');
const inputs = document.querySelectorAll('input');

// 【新功能 1】網頁一載入，先去抽屜檢查 (Load Data)
window.addEventListener('load', () => {
    const savedAccount = localStorage.getItem('userAccount');
    if (savedAccount) {
        inputs[0].value = savedAccount; // 自動填入帳號
        message.textContent = "歡迎回來，已幫您填好帳號！";
    }
});

loginBtn.addEventListener('click', () => {
    const account = inputs[0].value;
    const password = inputs[1].value;

    if (!account || !password) {
        message.textContent = '❌ 請輸入帳號和密碼';
        message.className = 'message error';
    } else {
        // 【新功能 2】登入成功後，存入抽屜 (Save Data)
        localStorage.setItem('userAccount', account);

        message.textContent = '✅ 登入成功！資料已儲存';
        message.className = 'message success';
        loginBtn.textContent = '已登入';
        loginBtn.disabled = true;
    }
});
clearBtn.addEventListener('click', () => {
    // 1. 刪除資料 (Data Level)
    localStorage.removeItem('userAccount'); 
    
    // 2. 清空輸入框 (UI Level)
    inputs[0].value = ""; 
    
    // 3. 給個提示訊息
    message.textContent = "🧹 記憶已清除！";
    message.className = 'message'; // 恢復成普通樣式
    
    // 4. (選做) 恢復登入按鈕狀態
    loginBtn.disabled = false;
    loginBtn.textContent = "登入";
});