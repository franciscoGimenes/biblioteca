let texto = document.querySelector("#livro")
let biblioteca = []

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
    cadastro(nome, autor, ano)

}
function mostrarLivros(){
    for (chave of biblioteca) {
        console.log(chave)
    }
    
}