const langBtn = document.getElementById('lang-btn');
let currentLang = 'ko';

langBtn.addEventListener('click', () => {
    // 언어 상태 스위칭
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    langBtn.textContent = currentLang === 'ko' ? 'EN' : 'KO';

    // 모든 번역 대상 요소를 찾아 텍스트 교체
    document.querySelectorAll('[data-ko]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});

// 스크롤 시 네비게이션 스타일 변경
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.padding = '20px 8%';
    }
});