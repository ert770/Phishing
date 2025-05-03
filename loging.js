document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.querySelector("input[type='text']").value;
    const pass = document.querySelector("input[type='password']").value;
    console.log("使用者輸入：", user, pass);
    alert("登入失敗，請稍後再試");  // 模擬假錯誤
});
