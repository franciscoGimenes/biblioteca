
function adicionar(){
    let nome = document.getElementById('nomeLivro').value
    let autor = document.getElementById('autorLivro').value
    let ano = document.getElementById('anoLivro').value
    cadastro(nome, autor, ano)
    console.log(biblioteca)
    if (0 < biblioteca.length) {
        cadastre.innerHTML = `Existem ${biblioteca.length} Livros cadastrados`
    }
}
function cadastro(nome, autor, ano){
    var livros = {
        titulo: nome,
        autor: autor,
        ano: ano,
    }
    biblioteca.push(livros)
}
let biblioteca = [];
let cadastre = document.querySelector("#cadastre")
// Selecionar o elemento container onde os livros serão adicionados
var container = document.getElementById("biblioteca-container");

function mostrarLivros(){   
    container.innerHTML = "";    // Limpar o conteúdo atual do container
    for (var i = 0; i < biblioteca.length; i++) {
    var livro = biblioteca[i];

    // Criar um elemento div para cada livro
    var livroDiv = document.createElement("div");
    livroDiv.classList.add("livro"); // opcional, para estilização

    // Construir o conteúdo HTML para o livro
    var livroHTML = "<h2>" + livro.titulo + "</h2>";
    livroHTML += "<p>Autor: " + livro.autor + "</p>";
    livroHTML += "<p>Ano: " + livro.ano + "</p>";

    // Definir o conteúdo HTML do elemento div do livro
    livroDiv.innerHTML = livroHTML;

    // Adicionar o elemento div do livro ao container
    container.appendChild(livroDiv);


}
}
// Iterar através da matriz biblioteca



function limparBiblioteca(){
    biblioteca = []
    container.innerHTML = "";
    cadastre.innerHTML = "Não existem livros cadastrados"
}



