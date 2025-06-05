import * as functions from "./function.js";
import * as functions2 from "./configs.js";
import * as functions3 from "./funcionarios.js";

await functions2.Carregando(1000, 7, "Abrindo programa");
functions2.deletar();
functions.Menu();
let res = functions.PerguntaOpcao("O que gostaria de ver primeiro senhor?  ");

while (res != 0 && res >= 0) {
  if (res === 1) {
    functions.relatorios();
  } else if (res === 2) {
    functions.Calculadora();
  } else if (res === 3) {
    functions3.MenuFuncionarios();
  } else if (res === 4) {
    functions.SaibaMais();
  }
  functions.Menu();
  res = functions.PerguntaOpcao("O que gostaria de ver primeiro senhor?  ");
}
functions.FinalizarPrograma();
