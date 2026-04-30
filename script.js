// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 平滑捲動功能
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. 簡單的導覽列滾動回饋 (可選：捲動時 Hero 內容淡出)
  window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      let scrollPos = window.scrollY;
      heroContent.style.opacity = 1 - (scrollPos / 600);
      heroContent.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  });
});
