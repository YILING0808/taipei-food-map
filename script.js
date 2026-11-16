"use strict";
(() => {
  const items = window.RESTAURANTS || [];
  const grid = document.querySelector('#restaurant-grid');
  const filters = [...document.querySelectorAll('[data-category]')];
  const searchInput = document.querySelector('#search-input');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const resetButton = document.querySelector('#reset-button');
  let activeCategory = '全部';

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const mapUrl = restaurant => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} ${restaurant.address}`)}`;
  function card(restaurant) {
    const r = Object.fromEntries(Object.entries(restaurant).map(([key,value]) => [key, escapeHtml(value)]));
    const image = r.imageUrl ? `<img src="${r.imageUrl}" alt="${r.specialty}的美食氛圍示意照片，非店家實拍" loading="lazy" referrerpolicy="no-referrer">` : '';
    return `<article class="food-card">
      <div class="food-image">${image}<span class="photo-badge">${r.category}</span></div>
      <div class="food-info"><div class="card-meta"><span>TAIPEI FOOD GUIDE</span><span class="meta-dot"></span><span class="district">${r.district}</span></div>
      <h3>${r.name}</h3><div class="english-name">${r.englishName}</div>
      <p class="card-description">${r.description}</p><div class="card-bottom"><span class="specialty">${r.specialty}</span>
      <a class="map-link" href="${mapUrl(restaurant)}" target="_blank" rel="noopener noreferrer" aria-label="在 Google 地圖查看 ${r.name}">查看地圖 <span aria-hidden="true">↗</span></a></div></div></article>`;
  }
  function render() {
    const query = searchInput.value.trim().toLocaleLowerCase('zh-Hant');
    const matches = items.filter(r => (activeCategory === '全部' || r.category === activeCategory) &&
      [r.name,r.englishName,r.district,r.address,r.specialty,r.description].some(value => String(value).toLocaleLowerCase('zh-Hant').includes(query)));
    grid.innerHTML = matches.map(card).join('');
    count.textContent = String(matches.length).padStart(2,'0');
    empty.hidden = matches.length > 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    filters.forEach(b => { const active = b === button; b.classList.toggle('is-active',active); b.setAttribute('aria-pressed',String(active)); });
    render();
  }));
  searchInput.addEventListener('input',render);
  resetButton.addEventListener('click',() => { searchInput.value=''; filters[0].click(); searchInput.focus(); });
  render();
})();
