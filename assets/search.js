(() => {
  const dialog = document.getElementById('site-search');
  const input = dialog.querySelector('input');
  const results = dialog.querySelector('.search-results');
  const lang = document.body.dataset.language;
  const en = lang === 'en';
  const root = new URL('../', document.currentScript.src);
  let data;
  const message = text => { results.replaceChildren(); const p = document.createElement('p'); p.className = 'search-status'; p.textContent = text; results.append(p); };
  async function search() {
    const query = input.value.trim().toLocaleLowerCase();
    if (!query) { message(en ? 'Search your résumé, projects, and notes.' : '이력서, 프로젝트, 글에서 원하는 내용을 찾아보세요.'); return; }
    if (!data) { message(en ? 'Loading…' : '검색 준비 중…'); return; }
    const words = query.split(/\s+/);
    const matches = data.filter(item => item.language === lang && words.every(word => (item.title + ' ' + item.text).toLocaleLowerCase().includes(word)));
    results.replaceChildren();
    if (!matches.length) { message(en ? 'No results. Try another keyword.' : '검색 결과가 없습니다. 다른 검색어를 입력해 보세요.'); return; }
    for (const item of matches) {
      const a = document.createElement('a'); a.className = 'search-result'; a.href = new URL(item.path, root);
      const h = document.createElement('strong'); h.textContent = item.title;
      const p = document.createElement('span'); const pos = item.text.toLocaleLowerCase().indexOf(words[0]);
      p.textContent = (pos > 40 ? '…' : '') + item.text.slice(Math.max(0, pos - 40), Math.max(0, pos - 40) + 160) + '…';
      a.append(h, p); results.append(a);
    }
  }
  document.querySelector('.search-trigger').addEventListener('click', async () => {
    dialog.showModal(); input.focus(); search();
    if (!data) { try { const response = await fetch(new URL('assets/search-index.json', root)); if (!response.ok) throw Error(); data = await response.json(); search(); } catch (_) { message(en ? 'Search is unavailable. Please try again.' : '검색을 불러오지 못했습니다. 다시 시도해 주세요.'); } }
  });
  dialog.querySelector('.search-close').addEventListener('click', () => dialog.close());
  input.addEventListener('input', search);
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
})();
