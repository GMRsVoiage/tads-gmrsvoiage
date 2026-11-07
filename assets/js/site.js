(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  const yearTargets = document.querySelectorAll('[data-current-year]');
  yearTargets.forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });

  const search = document.querySelector('#project-search');
  const list = document.querySelector('#project-list');
  const count = document.querySelector('#results-count');
  const emptyState = document.querySelector('#empty-state');

  if (search && list) {
    const cards = Array.from(list.querySelectorAll('[data-search]'));
    const updateResults = () => {
      const term = search.value.trim().toLocaleLowerCase('pt-BR');
      let visible = 0;

      cards.forEach((card) => {
        const haystack = (card.dataset.search || '').toLocaleLowerCase('pt-BR');
        const matches = !term || haystack.includes(term);
        card.hidden = !matches;
        if (matches) visible += 1;
      });

      if (count) {
        count.textContent = visible === 1 ? '1 trabalho disponível' : `${visible} trabalhos disponíveis`;
      }
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    search.addEventListener('input', updateResults);
    updateResults();
  }
})();
