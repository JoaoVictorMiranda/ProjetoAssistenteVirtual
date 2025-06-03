import * as functions from "./function.js";
import * as functions2 from "./configs.js";

await functions2.Carregando(2000, 5, "Abrindo programa");
functions2.deletar();
functions.Menu();
let res = functions.PerguntaOpcao("QUAL SERIA SUA DECISÃO SENHOR????");

while (res != 0 && res >= 0) {
  if (res === 1) {
    functions.relatorios();
  } else if (res === 2) {
    functions.Calculadora();
  } else if (res === 3) {
  } else if (res === 4) {
    functions.SaibaMais();
  }
  functions.Menu();
  res = functions.PerguntaOpcao("QUAL SERIA SUA DECISÃO SENHOR????");
}
functions.FinalizarPrograma();
