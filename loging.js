document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const account = document.getElementById("account").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorText = document.getElementById("loginError");

    if (!account || !password) {
        errorText.textContent = "請輸入帳號與密碼。";
        return;
    }

    console.log("模擬偷取帳密：", account, password);
    window.location.href = "payment.html";
});
