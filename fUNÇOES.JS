var nome = ""
var senha = ""

function SolicitarDados(){
    nome = prompt("Seu nome:")
    senha = prompt("Sua senha:")
}

// 1.5.2

function VerificarDados(nome,senha){
    var nome2 = prompt("Nome:")
    var senha2 = prompt("Senha:")
    if(nome2 == nome && senha2 == senha){
        return true
    } else{
        return false
    }
}

// 1.5.3

SolicitarDados()
console.log(VerificarDados(nome,senha))