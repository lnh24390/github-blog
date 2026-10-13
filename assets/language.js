(() => {
  const language = document.body.dataset.language;
  let saved;
  try { saved = localStorage.getItem('blogLanguage'); } catch (_) {}
  const explicit = new URLSearchParams(location.search).has('language');
  if (explicit) { try { localStorage.setItem('blogLanguage', language); } catch (_) {} }
  else if ((saved === 'ko' || saved === 'en') && saved !== language) {
    const target = document.querySelector('[data-language="' + saved + '"]');
    if (target) { location.replace(target.href); return; }
  }
  document.querySelectorAll('a[data-language]').forEach(link => {
    link.addEventListener('click', () => { try { localStorage.setItem('blogLanguage', link.dataset.language); } catch (_) {} });
    const url = new URL(link.href); url.searchParams.set('language', link.dataset.language); link.href = url.href;
  });
})();