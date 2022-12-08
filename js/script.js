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

// Ativar itens do orçamento.

const parametros = new URLSearchParams(location.search);

function ativarSeguro(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

function ativarBikcraft(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarSeguro);
parametros.forEach(ativarBikcraft);

// Perguntas Frequentes

const perguntas = document.querySelectorAll('.insurance-questions button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const atributo = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(atributo);
    
    resposta.classList.toggle('ativa'); // Inserir a classe "ativa" no botão que for clicado.
    const ativa = resposta.classList.contains('ativa'); // Verifica se tem a classe ativa (true) ou se não tem (false).
    pergunta.setAttribute('aria-expanded', ativa); // Setar o atribute aria-expanded como verdadeiro se a classe ativa existir ou como false se não existir.
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicycle-images img');
const galeriaContainer = document.querySelector('.bicycle-images');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches; // Método que retorna true se a largura da tela for acima de 1000px.
    
    if (media) {
        galeriaContainer.prepend(img); // Método que pega o elemento e realoca para a primeira posição dentro da galeria.
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

// Animação

if (window.SimpleAnime) {
    new SimpleAnime();
}