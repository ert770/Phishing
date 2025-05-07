document.addEventListener('DOMContentLoaded', function() {
    // 持卡人資料選擇
    const cardholderOptions = document.querySelectorAll('input[name="cardholder"]');

    cardholderOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'different-person') {
                // Removed alert for entering cardholder details
                // You can add logic here to display a form instead
            }
        });
    });

    // 發票類型選擇
    const receiptOptions = document.querySelectorAll('.receipt-option');

    receiptOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有按鈕的active狀態
            receiptOptions.forEach(btn => btn.classList.remove('active'));
            // 新增active狀態到當前點擊的按鈕
            this.classList.add('active');

            // Removed alerts for different receipt options
            // Add logic here if needed to display additional forms or inputs
        });
    });

    // 電子發票載具選擇
    const eInvoiceOptions = document.querySelectorAll('input[name="e-invoice"]');

    eInvoiceOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Removed alerts for mobile barcode and natural person certificate
            // Add logic here if needed to display additional forms or inputs
        });
    });

    // 付款詳情折疊功能
    const paymentNote = document.querySelector('.payment-note');

    if (paymentNote) {
        paymentNote.addEventListener('click', function() {
            alert('顯示詳細付款明細');
            // 這裡可以實現詳細明細的折疊展開功能
        });
    }

    // 信用卡表單驗證
    const cardNumberInput = document.querySelector('.card-number');
    const cvvInput = document.querySelector('.cvv');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            // 只允許輸入數字並格式化卡號
            let value = this.value.replace(/\D/g, '');
            let formattedValue = '';

            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }

            this.value = formattedValue.substring(0, 19); // 限制16位卡號加3個空格
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            // 只允許輸入數字且最多3位
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }

    // 確認結帳按鈕
    const confirmBtn = document.querySelector('.confirm-btn');
    const errorMsg = document.querySelector('.error-msg');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const cardNumber = cardNumberInput?.value.replace(/\s/g, '') || '';
            const expiryInput = document.querySelector('.exp-date');
            const cvv = cvvInput?.value || '';

            errorMsg.style.display = 'none';
            errorMsg.textContent = '';

            if (cardNumber.length < 16) {
                errorMsg.textContent = '請輸入完整的信用卡號';
                errorMsg.style.display = 'block';
                return;
            }

            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryInput.value)) {
                errorMsg.textContent = '請輸入有效的信用卡有效期 (格式: MM/YY)';
                errorMsg.style.display = 'block';
                return;
            }

            if (cvv.length < 3) {
                errorMsg.textContent = '請輸入完整的安全碼';
                errorMsg.style.display = 'block';
                return;
            }

            errorMsg.textContent = '訂單處理中，請稍候...';
            errorMsg.style.display = 'block';

            // 修改：延遲後導向到付款成功頁面
            setTimeout(() => {
                window.location.href = 'payment-success.html';
            }, 1500);
        });
    }

    // 修改: 有效期欄位只允許輸入數字並自動添加斜線
    const expiryInput = document.querySelector('.exp-date');
    if (expiryInput) {
        expiryInput.addEventListener('input', function() {
            // 只允許輸入數字
            let value = this.value.replace(/\D/g, '');

            // 自動添加斜線
            if (value.length >= 2) {
                this.value = value.slice(0, 2) + '/' + value.slice(2, 4);
            } else {
                this.value = value;
            }
        });

        // 在focus事件中清除斜線，方便用戶直接輸入數字
        expiryInput.addEventListener('focus', function() {
            this.value = this.value.replace(/\//g, '');
        });

        // 在blur事件中重新格式化
        expiryInput.addEventListener('blur', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 1) {
                if (value.length === 1) {
                    value = '0' + value;
                }
                if (value.length >= 2) {
                    this.value = value.slice(0, 2) + '/' + value.slice(2, 4);
                } else {
                    this.value = value;
                }
            }
        });
    }

    // 銀行帳戶付款選項
    const bankTransferBtn = document.querySelector('.bank-transfer');

    if (bankTransferBtn) {
        bankTransferBtn.addEventListener('click', function() {
            alert('切換至銀行帳戶付款方式');
            // 實際應用中會顯示銀行帳戶付款相關的表單或選項
        });
    }
});