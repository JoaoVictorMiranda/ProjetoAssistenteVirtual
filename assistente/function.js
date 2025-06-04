import prompt from "prompt-sync";
import chalk from "chalk";
import * as functions from "./configs.js";
let input = prompt();

export function Menu() {
  console.log("╔════════════════════════════════════════════════════╗");
  console.log(
    `║                     ${chalk.blue("ASSISTENTE")}                     ║`
  );
  console.log(
    `║                     ${chalk.blue("Virtual")}                        ║`
  );
  console.log("╠════════════════════════════════════════════════════╣");
  console.log("║  1° Relatorios                                     ║");
  console.log("║  2° Calculadora                                    ║");
  console.log("║  3° Configurações                                  ║");
  console.log("║  4° Saiba Mais                                     ║");
  console.log("║  0° SAIR                                           ║");
  console.log("╚════════════════════════════════════════════════════╝");
}

export function relatorios() {
  functions.deletar();
  let sair = false;
  while (!sair) {
    console.log("╔════════════════════════════════════════════════════╗");
    console.log("║              🔍 RELATÓRIOS DA EMPRESA              ║");
    console.log("╠════════════════════════════════════════════════════╣");
    console.log("║  1° 📁 Relatório do último mês (Maio)              ║");
    console.log("║  2° 📂 Relatório atual (Junho)                     ║");
    console.log("║  3° 📈 Gráficos de desempenho                      ║");
    console.log("║  4° 🛒 Produtos mais vendidos                      ║");
    console.log("║  0° 🔙 Voltar ao menu principal                   ║");
    console.log("╚════════════════════════════════════════════════════╝");

    const opcao = PerguntaOpcao("Digite a opção desejada: ");

    functions.deletar();

    switch (opcao) {
      case 1:
        console.log("╔════════════════════════════════════════════════════╗");
        console.log("║               📁 RELATÓRIO - MAIO                 ║");
        console.log("╠════════════════════════════════════════════════════╣");
        console.log("║ VENDAS TOTAIS:                                     ║");
        console.log("║     → R$ 10.500,00                                 ║");
        console.log("║                                                    ║");
        console.log("║ PRODUTOS MAIS VENDIDOS:                            ║");
        console.log("║     1.    Caneta Azul – 320 unidades               ║");
        console.log("║     2.    Caderno – 245 unidades                   ║");
        console.log("║     3.    Lápis – 198 unidades                     ║");
        console.log("║                                                    ║");
        console.log("║ DESTAQUE: Aumento de 12% nas vendas do mês         ║");
        console.log("╚════════════════════════════════════════════════════╝");
        break;

      case 2:
        console.log("╔════════════════════════════════════════════════════╗");
        console.log("║              📂 RELATÓRIO - JUNHO (ATUAL)         ║");
        console.log("╠════════════════════════════════════════════════════╣");
        console.log("║ VENDAS PARCIAIS:                                   ║");
        console.log("║     → R$ 4.200,00 (1ª quinzena)                    ║");
        console.log("║ ESTOQUE:                                           ║");
        console.log("║     → Atualizado em 78%                            ║");
        console.log("║                                                    ║");
        console.log("║ TENDÊNCIA: Alta demanda por materiais escolares    ║");
        console.log("╚════════════════════════════════════════════════════╝");
        break;

      case 3:
        console.log("╔════════════════════════════════════════════════════╗");
        console.log("║             📈 GRÁFICO DE DESEMPENHO               ║");
        console.log("╠════════════════════════════════════════════════════╣");
        console.log("║ Semana 1: ███████ (R$ 1.800)                       ║");
        console.log("║ Semana 2: ██████████ (R$ 2.400)                    ║");
        console.log("║ Semana 3: █████ (R$ 1.000)                         ║");
        console.log("║ Semana 4: ████████ (Estimado R$ 2.000)             ║");
        console.log("║                                                    ║");
        console.log("║ Obs: Crescimento após campanha de descontos.       ║");
        console.log("╚════════════════════════════════════════════════════╝");
        break;

      case 4:
        console.log("╔════════════════════════════════════════════════════╗");
        console.log("║             🛒 PRODUTOS MAIS VENDIDOS              ║");
        console.log("╠════════════════════════════════════════════════════╣");
        console.log("║ 1.  Caneta Azul – 320 unidades                     ║");
        console.log("║ 2.  Caderno – 245 unidades                         ║");
        console.log("║ 3.  Lápis HB – 198 unidades.                       ║");
        console.log("║ 4.  Clips – 132 unidades                           ║");
        console.log("║ 5.  Marca-texto – 120 unidades                     ║");
        console.log("║                                                    ║");
        console.log("║ Dados acumulados até o dia 15/06                   ║");
        console.log("╚════════════════════════════════════════════════════╝");
        break;

      case 0:
        sair = true;
        break;

      default:
        console.log("Opção inválida. Por favor, selecione um número do menu.");
        break;
    }

    if (!sair) {
      PerguntaOpcao("Pressione Enter para continuar...");
      functions.deletar();
    }
  }
}

export function SaibaMais() {
  functions.deletar();
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║                     SAIBA MAIS                     ║");
  console.log("╠════════════════════════════════════════════════════╣");
  console.log("║                                                    ║");
  console.log("║                PRAZER SOU ANA CLARA                ║");
  console.log("║           A Nova assistente virtual da NewShire    ║");
  console.log("║          Fui feita inteiramente em Javascript      ║");
  console.log("║          Estou hospedada no github(Publico)        ║");
  console.log("║          Peço gentilmente para que                 ║");
  console.log("║          não roube meu codigo ficarei feliz        ║");
  console.log("╚════════════════════════════════════════════════════╝");
  PerguntaOpcao("Gostaria de sair? ");
  functions.deletar();
}

export function PerguntaOpcao(msg) {
  let resposta = input(msg);
  let valor = Number(resposta);
  if (isNaN(valor)) {
    console.log("Por favor, insira um número válido.");
    return PerguntaOpcao(msg);
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

export function Calculadora() {
  functions.deletar();
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║                    CALCULADORA                     ║");
  console.log("╠════════════════════════════════════════════════════╣");
  console.log("║  1° SOMA                                           ║");
  console.log("║  2° SUBTRAÇÃO                                      ║");
  console.log("║  3° MULTIPLICAÇÃO                                  ║");
  console.log("║  4° DIVISÂO                                        ║");
  console.log("║  0° 🔙 Voltar ao menu principal                    ║");
  console.log("╚════════════════════════════════════════════════════╝");
  const operacao = PerguntaOpcao("Qual sua operação??   ");

  switch (operacao) {
    case 1:
      let n1 = PerguntaOpcao("Qual seria seu primeiro numero?   ");
      let n2 = PerguntaOpcao("Qual seria seu Segundo  numero?   ");
      console.log("");
      let result = soma(n1, n2);
      console.log(chalk.black.bgYellow.bold(` ${n1} + ${n2} = ${result} `));
      console.log("");
      PerguntaOpcao("Aperte para voltar");
      Calculadora();
      break;
    case 2:
      console.log("SUBTRAÇÃO");
      break;
    case 3:
      console.log("MULTIPLICAÇÃO");
      break;
    case 4:
      console.log("DIVISÃO");
      break;
  }
}

function soma(n1, n2) {
  return n1 + n2;
}
