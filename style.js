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