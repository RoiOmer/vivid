window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    main.classList.add('visible');
  }, 500); // 3.5 seconds coral animation
});
