document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.getElementById('menu').classList.toggle('active');
    });
  }

  const switcher = document.getElementById('languageSwitcher');
  if (!switcher) return;

  switcher.addEventListener('change', function () {
    const lang = this.value;

    // Aktuelle Seite ermitteln
    const currentPage = window.location.pathname.split('/').pop();

    // Zuordnung der Sprachversionen
    const pageMap = {
      'index.html':       { en: 'index.html',       de: 'index-de.html' },
      'index-de.html':    { en: 'index.html',       de: 'index-de.html' },

      'book1.html':       { en: 'book1.html',       de: 'book1-de.html' },
      'book1-de.html':    { en: 'book1.html',       de: 'book1-de.html' },

      'order.html':       { en: 'order.html',       de: 'order-de.html' },
      'order-de.html':    { en: 'order.html',       de: 'order-de.html' },

      'contact.html':     { en: 'contact.html',     de: 'contact-de.html' },
      'contact-de.html':  { en: 'contact.html',     de: 'contact-de.html' }
    };

    // Zielseite festlegen, oder fallback auf EN-Startseite
    const targetPage = pageMap[currentPage] ? pageMap[currentPage][lang] : 'index.html';

    window.location.href = targetPage;
  });
});
