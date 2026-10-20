/* Reuse The Met Open Access image for the article and blog card. */
fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/13060')
  .then(r => r.ok ? r.json() : null)
  .then(d => {
    const src = d && (d.primaryImage || d.primaryImageSmall);
    if (!src) return;
    const preloader = new Image();
    preloader.onload = () => {
      const card = document.getElementById('met-card-visual');
      if (card) card.style.backgroundImage = 'url(' + JSON.stringify(src) + ')';
      const image = document.getElementById('met-image');
      const fallback = document.getElementById('met-placeholder');
      if (image && fallback) { image.src = src; image.hidden = false; fallback.hidden = true; }
    };
    preloader.src = src;
  }).catch(() => {});
