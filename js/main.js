// وقتی DOM کاملاً لود شد، کلاس 'loaded' اضافه می‌کنیم
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50); // یک تاخیر کوتاه برای اطمینان از بارگذاری کامل
});
