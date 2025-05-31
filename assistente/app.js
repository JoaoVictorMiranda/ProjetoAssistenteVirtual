import * as functions from "./function.js";
import * as functions2 from "./configs.js";

await functions2.Inicial(2000, 5, "Abrindo programa");
functions.Menu();
let res = functions.PerguntaOpcao("QUAL SERIA SUA DECISÃO SENHOR????");

while (res != 0 && res >= 0) {
  if (res === 1) {
  } else if (res === 2) {
  } else if (res === 3) {
  } else if (res === 4) {
    functions.SaibaMais();
  }
  functions2.Inicial();
  functions.Menu();
  res = functions.PerguntaOpcao("QUAL SERIA SUA DECISÃO SENHOR????");
}
  functions2.Inicial(1000,3,"Fechando Obrigado por usar..");
functions.FinalizarPrograma();
