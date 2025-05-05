document.addEventListener('DOMContentLoaded', function () {
    // Toggle password visibility
    document.querySelectorAll('.eye-icon').forEach(icon => {
        icon.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const iconElement = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                iconElement.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                input.type = 'password';
                iconElement.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });
    });

    // Show error message below input
    function showError(elementId, message) {
        const container = document.getElementById(elementId).parentElement;
        let errorEl = container.querySelector('.error-msg');

        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'error-msg';
            errorEl.style.color = 'red';
            errorEl.style.fontSize = '13px';
            errorEl.style.marginTop = '5px';
            container.appendChild(errorEl);
        }

        errorEl.textContent = message;
    }

    // Clear all error messages
    function clearErrors() {
        document.querySelectorAll('.error-msg').forEach(el => el.remove());
    }

    // Form validation and submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const account = document.getElementById('account').value.trim();
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        let valid = true;

        if (!account) {
            showError('account', '請輸入帳號');
            valid = false;
        }

        if (!password) {
            showError('password', '請輸入密碼');
            valid = false;
        } else if (password.length < 6 || password.length > 15) {
            showError('password', '密碼長度應為 6–15 位');
            valid = false;
        } else {
            const hasLetter = /[a-zA-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            if (!hasLetter || !hasNumber) {
                showError('password', '密碼需包含英文字母與數字');
                valid = false;
            }
        }

        if (!valid) return;

        console.log('登入帳號:', account);
        console.log('記住我:', remember);

        alert('登入成功！系統將自動導向...');
        setTimeout(() => {
            window.location.href = 'payment.html';
        }, 1000);
    });

    // Social login
    document.querySelectorAll('.social-btn').forEach(button => {
        button.addEventListener('click', function () {
            const provider = this.dataset.provider || '未知平台';
            alert(`使用 ${provider} 登入功能尚未實作`);
        });
    });

    // Links
    document.querySelector('.register')?.addEventListener('click', function (e) {
        e.preventDefault();
        alert('立即註冊功能尚未實作');
    });

    document.querySelector('.forgot')?.addEventListener('click', function (e) {
        e.preventDefault();
        alert('忘記密碼功能尚未實作');
    });

    // Footer navigation
    const pages = ['首頁', '熱銷榜', '追蹤清單', '通知', '購物車', '會員中心'];
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            alert(`前往${pages[index]}頁面`);
        });
    });
});
