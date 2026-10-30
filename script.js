'use strict';

// Número provisório fornecido pelo responsável pelo projeto. Troque apenas aqui.
const CONTACT = { whatsapp: '5511921589949' };
const defaultMessage = 'Olá! Gostaria de saber mais sobre os atendimentos da Alessandra.';
const whatsappUrl = (message) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl(defaultMessage); });

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if(event.matches) closeMenu(); });

const storyButton = document.querySelector('#story-toggle');
const story = document.querySelector('#story');
storyButton.addEventListener('click', () => {
  const open = storyButton.getAttribute('aria-expanded') !== 'true';
  storyButton.setAttribute('aria-expanded', String(open));
  story.hidden = !open;
  storyButton.firstChild.textContent = open ? 'Recolher minha história ' : 'Conheça minha história ';
});

document.querySelectorAll('[data-service]').forEach(link => {
  link.href = whatsappUrl(`Olá! Gostaria de saber mais sobre ${link.dataset.service}.`);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelector('#year').textContent = new Date().getFullYear();
