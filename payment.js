document.addEventListener('DOMContentLoaded', function() {
    // 返回按鈕功能
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', function() {
        alert('返回上一頁');
        // 實際應用中應該用: window.history.back();
    });

    // 關閉按鈕功能
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        alert('關閉頁面');
        // 實際應用中應該用: window.close();
    });

    // 付款方式選擇
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const creditCardForm = document.querySelector('.credit-card-form');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'credit-once') {
                creditCardForm.style.display = 'block';
            } else {
                // 這裡可以顯示分期付款的選項
                creditCardForm.style.display = 'block';
                alert('請選擇分期期數');
            }
        });
    });

    // 持卡人資料選擇
    const cardholderOptions = document.querySelectorAll('input[name="cardholder"]');

    cardholderOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'different-person') {
                alert('請輸入持卡人資料');
                // 這裡可以顯示輸入持卡人資料的表單
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

            // 根據選擇顯示不同的發票選項
            const optionText = this.textContent;
            if (optionText === '發票捐贈') {
                alert('請選擇捐贈單位');
            } else if (optionText === '公司用發票') {
                alert('請輸入公司統一編號和抬頭');
            }
        });
    });

    // 電子發票載具選擇
    const eInvoiceOptions = document.querySelectorAll('input[name="e-invoice"]');

    eInvoiceOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.id === 'mobile-invoice') {
                alert('請輸入手機條碼');
            } else if (this.id === 'natural-invoice') {
                alert('請輸入自然人憑證號碼');
            }
        });
    });

    // 付款詳情折疊功能
    const paymentNote = document.querySelector('.payment-note');

    paymentNote.addEventListener('click', function() {
        alert('顯示詳細付款明細');
        // 這裡可以實現詳細明細的折疊展開功能
    });

    // 信用卡表單驗證
    const cardNumberInput = document.querySelector('.card-number');
    const cvvInput = document.querySelector('.cvv');

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

    cvvInput.addEventListener('input', function() {
        // 只允許輸入數字且最多3位
        this.value = this.value.replace(/\D/g, '').substring(0, 3);
    });

    // 確認結帳按鈕
    const confirmBtn = document.querySelector('.confirm-btn');

    confirmBtn.addEventListener('click', function() {
        // 檢查卡號是否已填寫
        const cardNumber = cardNumberInput.value.replace(/\s/g, '');
        const expMonth = document.querySelector('.exp-month').value;
        const expYear = document.querySelector('.exp-year').value;
        const cvv = cvvInput.value;

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

        alert('訂單處理中，請稍候...');
        // 實際應用中會有表單提交和處理訂單的邏輯
    });

    // 銀行帳戶付款選項
    const bankTransferBtn = document.querySelector('.bank-transfer');

    bankTransferBtn.addEventListener('click', function() {
        alert('切換至銀行帳戶付款方式');
        // 實際應用中會顯示銀行帳戶付款相關的表單或選項
    });
});