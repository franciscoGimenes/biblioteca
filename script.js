
function cadastro(nome, autor, ano){
    var livros = {
        titulo: nome,
        autor: autor,
        ano: ano,
    }
    biblioteca.push(livros)
}
function adicionar(){
    let nome = document.getElementById('nomeLivro').value
    let autor = document.getElementById('autorLivro').value
    let ano = document.getElementById('anoLivro').value
    let url = document.getElementById('urlLivro').value
    cadastro(nome, autor, ano)
    imagens.push(url)
    if (0 < biblioteca.length) {
        cadastre.innerHTML = `Existem ${biblioteca.length} Livros cadastrados`
    }
    // console.log(imagensDisponiveis.length)
    carregar()
    console.log(biblioteca.length)
    console.log(tamanhoBiblioteca)  
}

var biblioteca = [];
let cadastre = document.querySelector("#cadastre")

var container = document.getElementById("biblioteca-container");

function mostrarLivros(){   
    container.innerHTML = "";  
    for (var i = 0; i < biblioteca.length; i++) {
    var livro = biblioteca[i];


    var livroDiv = document.createElement("div");
    livroDiv.classList.add("livro");

    var livroHTML = '<h2 class="tituloLivro" >' + livro.titulo + '</h2>';
    livroHTML += '<p class="subTitulo">Autor: ' + livro.autor + '</p>';
    livroHTML += '<p class="subTitulo">Ano: ' + livro.ano + '</p>';


    livroDiv.innerHTML = livroHTML;

    container.appendChild(livroDiv);


}
}
var imgIndice = 0
const prevButton = document.getElementById('anterior')
const nextButton = document.getElementById('proximo')

var IMG = document.getElementById('imagemCarrossel')

var imagens = []

// var tamanhoBiblioteca = biblioteca.length
// var imagensDisponiveis = imagens.slice(0, tamanhoBiblioteca)
let autorCarrossel = document.getElementById("autorCarrossel")
let anoCarrossel = document.getElementById("anoCarrossel")
let tituloCarrossel = document.getElementById('carrosselTitulo')

function limparBiblioteca(){
    biblioteca = []
    container.innerHTML = "";
    cadastre.innerHTML = "Cadastre um livro"
    imagens.length = 0
    tituloCarrossel.textContent = "Ainda não existem livros cadastrados"
    autorCarrossel.textContent = ""
    anoCarrossel.textContent = ""
    imgIndice = 0
    console.log('funcionando')
    carregar()
}

//começara trabalhar no carrossel de imagem
function carregar(){    
    IMG.src = imagens[imgIndice]
    tituloCarrossel.textContent = biblioteca[imgIndice].titulo
    autorCarrossel.textContent = biblioteca[imgIndice].autor
    anoCarrossel.textContent = biblioteca[imgIndice].ano
}

prevButton.addEventListener('click', () => {
    var limite = (imagens.length)
    if (imgIndice > 0){
        --imgIndice
        carregar()
    }
    else {
        imgIndice = limite - 1
        carregar()
    }
    
})
nextButton.addEventListener('click', () => {
    var limite = (imagens.length)
    if (imgIndice < limite - 1){
        ++imgIndice
        carregar()
    }
    else {
        imgIndice = 0 
        carregar()
    }
    console.log(imgIndice)
})
carregar()
