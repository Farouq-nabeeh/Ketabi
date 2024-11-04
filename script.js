// عرض تفاصيل الكتاب عند الضغط على زر "حول الكتاب"
function showDetails(bookId) {
    alert("تفاصيل الكتاب: " + bookId);
}

// إرسال نموذج الاتصال
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    alert('تم إرسال الرسالة بنجاح!');
    this.reset(); // إعادة تعيين النموذج
});
