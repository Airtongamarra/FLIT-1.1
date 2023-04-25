function calcularAumentoSalario(valorBase) {
    try {
      if (isNaN(valorBase)) {
        throw new Error("O valor base do salário deve ser um número.");
      }
  
      if (valorBase <= 1500) {
        return (valorBase * 1.2).toFixed(2);
      } else if (valorBase <= 2000) {
        return (valorBase * 1.15).toFixed(2);
      } else if (valorBase <= 3000) {
        return (valorBase * 1.1).toFixed(2);
      } else {
        return (valorBase * 1.05).toFixed(2);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  // Teste da função com diferentes valores de salário
  try {
    let salario1 = 1000;
    let salario2 = 1600;
    let salario3 = 2100;
    let salario4 = "3000"; // Valor inválido, será tratado como erro
  
    console.log("Salário base: R$", salario1, "Novo salário: R$", calcularAumentoSalario(salario1));
    console.log("Salário base: R$", salario2, "Novo salário: R$", calcularAumentoSalario(salario2));
    console.log("Salário base: R$", salario3, "Novo salário: R$", calcularAumentoSalario(salario3));
    console.log("Salário base: R$", salario4, "Novo salário: R$", calcularAumentoSalario(salario4));
  } catch (error) {
    console.error(error);
  }