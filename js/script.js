// Criando a classe "ativo" via JavaScript para que a barra de navegação fique sempre especificando em qual página o usuário está.

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }    
}

links.forEach(ativarLink);