// フェードインの処理
const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElems.forEach(el => observer.observe(el));

// ページトップへ戻るボタン
const toTopBtn = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
