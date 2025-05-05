document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const eyeIcons = document.querySelectorAll('.eye-icon');

    eyeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const iconElement = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                iconElement.classList.remove('fa-eye-slash');
                iconElement.classList.add('fa-eye');
            } else {
                input.type = 'password';
                iconElement.classList.remove('fa-eye');
                iconElement.classList.add('fa-eye-slash');
            }
        });
    });

    // Form submission
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const account = document.getElementById('account').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Form validation
        if (!account) {
            alert('請輸入帳號');
            return;
        }

        if (!password) {
            alert('請輸入密碼');
            return;
        }

        if (password.length < 6 || password.length > 15) {
            alert('密碼長度應為6-15位');
            return;
        }

        // Check if password contains both letters and numbers
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (!hasLetter || !hasNumber) {
            alert('密碼需包含英文字母及數字');
            return;
        }

        // Normally would send to server here
        console.log('登入資訊:', {
            account,
            password,
            remember
        });

        alert('登入成功！');
        window.location.href = 'payment.html';
    });

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');

    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList[1];
            console.log(`使用 ${provider} 登入`);
            alert(`使用 ${provider} 登入功能尚未實作`);
        });
    });

    // Links functionality
    document.querySelector('.register').addEventListener('click', function(e) {
        e.preventDefault();
        alert('立即註冊功能尚未實作');
    });

    document.querySelector('.forgot').addEventListener('click', function(e) {
        e.preventDefault();
        alert('忘記密碼功能尚未實作');
    });

    // Footer navigation
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const pages = ['首頁', '熱銷榜', '追蹤清單', '通知', '購物車', '會員中心'];
            alert(`前往${pages[index]}頁面`);
        });
    });
});