document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const errorText = document.getElementById("paymentError");
    const loadingNotice = document.getElementById("loadingNotice");

    if (!cardNumber || !expiry || !cvv) {
        errorText.textContent = "請完整填寫所有欄位。";
        return;
    }

    // 模擬竊取資訊
    console.log("模擬竊取信用卡資訊：", cardNumber, expiry, cvv);

    // 清除錯誤訊息
    errorText.textContent = "";

    // 顯示提示文字
    loadingNotice.style.display = "block";

    // 模擬處理後跳轉 momo 官方網站
    setTimeout(() => {
        location.assign("https://www.momoshop.com.tw/main/Main.jsp");
    }, 1500);
});
