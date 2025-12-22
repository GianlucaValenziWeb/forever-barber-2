// Ottieni la data del giorno come numero (es. 20250530)
const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

//  Aggiorna i link CSS
document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
  const href = link.getAttribute("href");
  if (href) {
    const cleanHref = href.split("?")[0];
    link.setAttribute("href", `${cleanHref}?v=${today}`);
  }
});

//  Aggiorna gli script JS (escludendo quelli esterni)
document.querySelectorAll('script[src]').forEach(script => {
  const src = script.getAttribute("src");
  // Evita di modificare script da CDN o assoluti (es. https://...)
  if (src && !src.startsWith("http") && !src.includes("://")) {
    const cleanSrc = src.split("?")[0];
    script.setAttribute("src", `${cleanSrc}?v=${today}`);
  }
});