// Redirect to login page when "立即購買" buttons are clicked
document.querySelectorAll(".product-card button").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "login.html";
    });
});

// Redirect to login page when "登入" or "註冊" links are clicked
document.querySelectorAll(".user-actions a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = "login.html";
    });
});