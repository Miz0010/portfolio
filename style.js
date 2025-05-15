document.addEventListener('DOMContentLoaded', () => {

// ----------------------------
// 1. Aboutパネル開閉制御
// ----------------------------
const aboutTrigger = document.getElementById('about-trigger');
const aboutPanel = document.getElementById('about-panel');

aboutTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  aboutPanel.classList.toggle('open');
  document.body.classList.toggle('about-open');
});

document.addEventListener('click', (e) => {
  const isClickInside = aboutPanel.contains(e.target) || aboutTrigger.contains(e.target);
  if (!isClickInside && aboutPanel.classList.contains('open')) {
    aboutPanel.classList.remove('open');
    document.body.classList.remove('about-open');
  }
});

// ----------------------------
// 2. カードスライド（横スクロール）制御
// ----------------------------
function scrollCards(direction) {
  const container = document.getElementById('cardContainer');
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// ----------------------------
// 3. スクロール矢印の表示制御
// ----------------------------
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const container = document.getElementById('cardContainer');

function updateScrollButtons() {
  leftBtn.style.display = container.scrollLeft > 0 ? 'block' : 'none';
  rightBtn.style.display = container.scrollLeft < container.scrollWidth - container.clientWidth ? 'block' : 'none';
}

if (container && leftBtn && rightBtn) {
  container.addEventListener('scroll', updateScrollButtons);
  window.addEventListener('load', updateScrollButtons);
}
});