import prompt from "prompt-sync";
import chalk from "chalk";
import * as functions from "./configs.js";
let input = prompt();

export function Menu() {
  console.log("########################");
  console.log(`##     ${chalk.blue("ASSISTENTE")}     ##`);
  console.log(`##       ${chalk.blue("Virtual")}      ##`);
  console.log("########################");
  console.log(`##        ${chalk.blue("MENU")}        ##`);
  console.log("########################");
  console.log("##  1° soma           ##");
  console.log("##  2° Subtração      ##");
  console.log("##  3° multiplicação  ##");
  console.log("##  4° Saiba Mais     ##");
  console.log("##  0° sair           ##");
  console.log("########################");
  return PerguntaOpcao("QUAL SERIA SUA DECISÃO SENHOR????");
}

export async function VerificarOpcao(opcao) {
  if (opcao == 4) {
    await functions.Inicial();
    SaibaMais();
  }
}
export async function SaibaMais() {
  console.log("#################################################");
  console.log(`##                    Saiba                    ##`);
  console.log(`##                     Mais                    ##`);
  console.log("#################################################");
  console.log("##            PRAZER SOU ANA CLARA             ##");
  console.log("##  A Nova assistente virtual da (EMPRESA)     ##");
  console.log("##      Fui feita inteiramente em Javascript   ##");
  console.log("##       Estou hospedada no github(Publico)    ##");
  console.log("##         Peço gentilmente para que           ##");
  console.log("##     não roube meu codigo ficarei feliz      ##");
  console.log("##                                             ##");
  console.log("##                  0° sair                    ##");
  console.log("#################################################");
}

export function PerguntaOpcao(msg) {
  console.log(msg);
  return Number(input());
}
