const loginBtn = document.querySelector('#loginBtn');
const message = document.querySelector('#message');
const inputs = document.querySelectorAll('input');

loginBtn.addEventListener('click', () => {
    const account = inputs[0].value;
    
    // 如果帳號是你的名字，就給特別的顏色
    if (account === "你的名字") {
        message.textContent = "🌟 尊貴的主人 " + account + " 歡迎回來！";
        document.body.style.background = "gold"; // 背景直接變金色！
    } else {
        message.textContent = "✅ 登入成功，你好 " + account;
        // 恢復成你原本酷炫的動畫背景
        document.body.style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    }
});