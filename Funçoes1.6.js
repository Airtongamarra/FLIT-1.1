// 1.6.1 
// function confirmarDados(nome){
//      var nomeCompleto = nome + ' da Silva';
//      var idade = 20;
//      function getAnoNascimento(){
//          var ano = 2022 - idade;
//          return ano
//     }

//     console.log('nome completo', nomeCompleto);
//      console.log('ano de nascimento', getAnoNascimento());
//      console.log('idade', idade)
//  }

//  confirmarDados('Marcos');

// 1.6.2

//  function confirmarDados(nome){
//     const nomeCompleto = nome + ' da Silva'
//     let geracao = 'millenium';
//     function getAnoNascimento(){
//         let idade = 40;
//         const ano = 2022 - idade;
//         return ano;
//     }

//     let anoDeNascimento = getAnoNascimento();
//     if(anoDeNascimento <= 1995){
//          geracao = 'geração X';
//     }
//     console.log('nome completo', nomeCompleto);
//     console.log('ano de nascimento', anoDeNascimento);
//     console.log('geração', geracao)
//  }
//  confirmarDados('Marcos')

  // 1.6.3

//  function confirmarDados(nome) {
//         try {
//             const nomeCompleto = nome + ' da Silva'
//             function getAnoNascimento() {
//                 const idade = 20
//                 const ano = 2022 - idade
//                 return ano
//             }
//             console.log('nome completo', nomeCompleto)
//             console.log('ano de nascimento', getAnoNascimento())
//             console.log('idade', idade)
//         }catch{
//             console.log('um erro foi encontrado e não foi possível concluir a operação')
//         }
//     }
    
//     confirmarDados('Marcos')

// 1.6.4

function confirmarDados(nome) {
  const nomeCompleto = nome + " da Silva";
  let geracao = "millenium";
  function getAnoNascimento() {
    const idade = 40;
    const ano = 2022 - idade;
    return ano;
  }

  const anoDeNascimento = getAnoNascimento();
  function geracaoDaPessoa(idade) {
    if (idade <= 1995) {
      geracao = "X";
      return geracao;
    }
  }
  geracao = geracaoDaPessoa(anoDeNascimento);
  console.log("nome completo:", nomeCompleto);
  console.log("ano de nascimento:", anoDeNascimento);
  console.log("geração:", geracao );
}
confirmarDados("Marcos");