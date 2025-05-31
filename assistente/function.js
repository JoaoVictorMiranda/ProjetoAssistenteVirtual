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
  console.log("##  2° CALCULADORA    ##");
  console.log("##  3° multiplicação  ##");
  console.log("##  4° Saiba Mais     ##");
  console.log("##  0° sair           ##");
  console.log("########################");
}

export function SaibaMais() {
  functions.deletar();
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
  PerguntaOpcao("Gostaria de sair? ");
  functions.deletar();
}

export function PerguntaOpcao(msg) {
  let resposta = input();

  if (resposta === "sans") {
    console.log(`██████████▀▀▀▀▀▀▀▀▀▀▀▀▀██████████
█████▀▀░░░░░░░░░░░░░░░░░░░▀▀█████
███▀░░░░░░░░░░░░░░░░░░░░░░░░░▀███
██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
█░░░░░░▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░█
█░░░▄██▀░░░▀██░░░░░░██▀░░░▀██▄░░█
█░░░██▄░░▀░░▄█░░░░░░█▄░░▀░░▄██░░█
██░░░▀▀█▄▄▄██░░░██░░░██▄▄▄█▀▀░░██
███░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░███
██░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░██
██░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░██
███░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░███
████▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄████
███████▄▄▄▄░░░░░░░░░░░░▄▄▄███████`);
    return PerguntaOpcao(msg); // volta para perguntar novamente
  }

  let valor = Number(resposta);

  if (isNaN(valor)) {
    console.log("Por favor, insira um número válido.");
    return PerguntaOpcao(msg); // recursivo até acertar
  }

  return valor;
}

export async function FinalizarPrograma() {
  process.stdout.write("\x1B[2J\x1B[0f");
  console.log("╭────────────────────────────────────────╮");
  console.log("│                                        │");
  console.log("│            PROCESSO FINALIZADO         │");
  console.log("│                                        │");
  console.log("│        Obrigado por utilizar Ana       │");
  console.log("│               Clara Assistente         │");
  console.log("│                                        │");
  console.log("╰────────────────────────────────────────╯");
}
