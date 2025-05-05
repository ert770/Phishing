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

    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            // 檢查卡號是否已填寫
            const cardNumber = cardNumberInput ? cardNumberInput.value.replace(/\s/g, '') : '';
            const expMonth = document.querySelector('.exp-month')?.value;
            const expYear = document.querySelector('.exp-year')?.value;
            const cvv = cvvInput ? cvvInput.value : '';

            if (cardNumber.length < 16) {
                alert('請輸入完整的信用卡號');
                return;
            }

            if (expMonth === '有效月' || expYear === '有效年') {
                alert('請選擇信用卡有效期');
                return;
            }

            if (cvv.length < 3) {
                alert('請輸入完整的安全碼');
                return;
            }

            // 顯示處理中訊息
            alert('訂單處理中，請稍候...');

            // 延遲後導向付款成功頁面
            setTimeout(function() {
                window.location.href = 'payment-success.html';
            }, 1000);
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