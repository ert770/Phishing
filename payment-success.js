document.addEventListener('DOMContentLoaded', function() {
    // 在頁面載入時顯示動畫效果
    setTimeout(function() {
        document.querySelector('.success-icon').classList.add('animate');
    }, 300);

    // 確定按鈕事件處理
    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', function() {
        // 實際環境中，這裡可以導向回首頁或訂單頁面
        window.location.href = 'index.html';
    });

    // 如果需要記錄付款結果或進行後續處理，可以加在這裡
    console.log('付款已成功完成');

    // 如果有訂單編號或其他需要顯示的信息，可以動態添加
    /*
    function addOrderInfo(orderNumber) {
        const noticeList = document.querySelector('.notice-list');
        const orderItem = document.createElement('li');
        orderItem.textContent = `訂單編號：${orderNumber}，請保存此號碼以便查詢。`;
        noticeList.appendChild(orderItem);
    }

    // 假設從URL參數或其他地方獲取訂單號
    const urlParams = new URLSearchParams(window.location.search);
    const orderNumber = urlParams.get('order');
    if (orderNumber) {
        addOrderInfo(orderNumber);
    }
    */
});