/*função para abrir a aba de projetos*/
document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
  event.preventDefault();

  var dropdownMenu = document.querySelector('.dropdown-menu'); //pega o dropdown menu
  var caret = this.querySelector('.caret'); //pega a setinha do dropdown

  dropdownMenu.classList.toggle('show');

  this.classList.toggle('active'); //aba de dropdown ativada

  caret.classList.toggle('rotate'); //rotação da setinha
});

/*  Menu hamburguer */


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menuHome ul");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

  });

 /* Fecha menu ao clicar em link mobile */
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        //se for a aba de dropdown, não fecha menu
      if (link.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        return;
      }
      if (window.innerWidth <= 768) {
          menu.classList.remove('show');
        }
      });
    });
});








