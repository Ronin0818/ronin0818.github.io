const root = document.documentElement;
function saveLanguage(value) {
  try { localStorage.setItem('song-language', value); } catch (error) { /* This visit still works without storage. */ }
}
document.querySelectorAll('button[data-language]').forEach(button => button.addEventListener('click', () => {
  root.dataset.language = button.dataset.language;
  root.lang = button.dataset.language === 'zh' ? 'zh-CN' : 'en';
  saveLanguage(button.dataset.language);
  document.querySelectorAll('button[data-language]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));
document.querySelectorAll('button[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === root.dataset.language)));
