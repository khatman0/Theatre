// وقتی DOM کاملاً لود شد، کلاس 'loaded' اضافه می‌کنیم
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50); // یک تاخیر کوتاه برای اطمینان از بارگذاری کامل
});
/* صفحه تماس */
const form = document.querySelector('.contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        successMessage.style.display = 'block';
        form.reset();
    } else {
        alert('مشکلی پیش آمد. دوباره امتحان کنید.');
    }
});
