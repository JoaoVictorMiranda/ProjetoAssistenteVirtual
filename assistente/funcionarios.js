import chalk from "chalk";
import * as functions from "./app.js";
import * as functions2 from "./configs.js";
import * as functions3 from "./function.js";

export function MenuFuncionarios() {
  let sair = false;
  while (!sair) {
    functions2.deletar();
    console.log(`╔════════════════════════════════════════════════════╗`);
    console.log(`║                 AREA DE ATUAÇÃO                    ║`);
    console.log(`╠════════════════════════════════════════════════════╣`);
    console.log(`║  ${chalk.bgBlueBright.black(`1° TI(Suporte e desenvolvimento)`)}                  ║`);
    console.log(`║  ${chalk.bgRedBright.black(`2°Administração`)}                                   ║`);
    console.log(`║  ${chalk.bgCyanBright.black(`3°Recursos Humanos`)}                                ║`);
    console.log(`║  ${chalk.bgBlack.white(`0°  Voltar ao menu principal`)}                      ║`);
    console.log(`╚════════════════════════════════════════════════════╝`);

    const opcao = functions3.PerguntaOpcao(`Digite a opção desejada: `);
    switch (opcao) {
      case 0:
        functions2.deletar();
        sair = true;
        break;
      case 1:
        mostrarAreaTI();
        break;
      case 2:
        mostrarAreaADM();
        break;
      case 3:
        mostrarAreaRH();
        break;
    }
  }
}

function mostrarAreaTI() {
  functions2.deletar();
  console.log(chalk.blue.bold("╔════════════════════════════════════════════════════╗"));
  console.log(chalk.blue.bold("║                   ÁREA DE TI                       ║"));
  console.log(chalk.blue.bold("╠════════════════════════════════════════════════════╣"));
  console.log(chalk.blue("║") + "  " + chalk.white.bgBlueBright.bold(" 1. Suporte Técnico                               ") + chalk.blue("║"));
  console.log(chalk.blue("║") + "  " + chalk.white.bgBlueBright(" 2. Desenvolvimento Web                           ") + chalk.blue("║"));
  console.log(chalk.blue("║") + "  " + chalk.black.bgWhite(" 0. Voltar à seleção de áreas                     ") + chalk.blue("║"));
  console.log(chalk.blue.bold("╚════════════════════════════════════════════════════╝"));

  let opcaoTI = Number(functions3.PerguntaOpcao("Selecione uma subárea de TI: "));
  switch (opcaoTI) {
    case 0:
      functions2.deletar();
      break;
    case 1:
      functions2.deletar();
      console.log(chalk.green.bold(`╔════════════════════════════════════════════════════╗`));
      console.log(chalk.green.bold(`║                  SUPORTE TÉCNICO                   ║`));
      console.log(chalk.green.bold(`╠════════════════════════════════════════════════════╣`));
      console.log(chalk.green(`║      Quantidade de Desenvolvedores: (5)            ║`));
      console.log(chalk.green(`║      Salário médio:                R$ 2.800,00     ║`));
      console.log(chalk.green(`║      Especialidades:                               ║`));
      console.log(chalk.green(`║   - Atendimento técnico local e remoto             ║`));
      console.log(chalk.green(`║   - Formatação e manutenção de máquinas            ║`));
      console.log(chalk.green(`║   - Suporte à rede internaL                        ║`));
      console.log(chalk.green(`║   - Abertura e fechamento de chamados técnicos     ║`));
      console.log(chalk.green(`║                                                    ║`));
      console.log(chalk.green(`║`) + chalk.black.bgWhite(` 0. Voltar ao menu anterior                         `) + chalk.green(`║`));
      console.log(chalk.green.bold(`╚════════════════════════════════════════════════════╝`));
      functions3.PerguntaOpcao("Aperte para Voltar...")
      break;
    case 2:
      functions2.deletar();
      console.log(chalk.green.bold(`╔════════════════════════════════════════════════════╗`));
      console.log(chalk.green.bold(`║                  DESENVOLVIMENTO WEB               ║`));
      console.log(chalk.green.bold(`╠════════════════════════════════════════════════════╣`));
      console.log(chalk.green(`║      Quantidade de Desenvolvedores: (6)            ║`));
      console.log(chalk.green(`║      Salário médio:                R$ 4.200,00     ║`));
      console.log(chalk.green(`║      Especialidades:                               ║`));
      console.log(chalk.green(`║   - Front-end: HTML, CSS, JavaScript               ║`));
      console.log(chalk.green(`║   - Back-end: Node.js e bancos de dados relacionais║`));
      console.log(chalk.green(`║   - Versionamento com Git e GitHub                 ║`));
      console.log(chalk.green(`║   - Trabalham com APIs e integração de sistemas    ║`));
      console.log(chalk.green(`║                                                    ║`));
      console.log(chalk.green(`║`) + chalk.black.bgWhite(` 0. Voltar ao menu anterior                         `) + chalk.green(`║`));
      console.log(chalk.green.bold(`╚════════════════════════════════════════════════════╝`));
      functions3.PerguntaOpcao("Aperte para Voltar...")
      break;
  }
}



function mostrarAreaADM() {
  functions2.deletar();
  console.log(chalk.green.bold(`╔════════════════════════════════════════════════════╗`));
  console.log(chalk.green.bold(`║                  ADMINISTRAÇÃO                     ║`));
  console.log(chalk.green.bold(`╠════════════════════════════════════════════════════╣`));
  console.log(chalk.green(`║      Quantidade de Funcionários: (5)               ║`));
  console.log(chalk.green(`║      Salário médio:                R$ 3.500,00     ║`));
  console.log(chalk.green(`║      Especialidades:                               ║`));
  console.log(chalk.green(`║   - Gestão administrativa e financeira             ║`));
  console.log(chalk.green(`║   - Controle de contratos e documentação           ║`));
  console.log(chalk.green(`║   - Atendimento a fornecedores e clientes          ║`));
  console.log(chalk.green(`║   - Planejamento estratégico e relatórios          ║`));
  console.log(chalk.green(`║                                                    ║`));
  console.log(chalk.green(`║`) + chalk.black.bgWhite(` 0. Voltar ao menu anterior                         `) + chalk.green(`║`));
  console.log(chalk.green.bold(`╚════════════════════════════════════════════════════╝`));
  functions3.PerguntaOpcao("Aperte para Voltar...");
}


function mostrarAreaRH() {
  functions2.deletar();
  console.log(chalk.green.bold(`╔════════════════════════════════════════════════════╗`));
  console.log(chalk.green.bold(`║                RECURSOS HUMANOS                    ║`));
  console.log(chalk.green.bold(`╠════════════════════════════════════════════════════╣`));
  console.log(chalk.green(`║      Quantidade de Funcionários: (4)               ║`));
  console.log(chalk.green(`║      Salário médio:                R$ 3.200,00     ║`));
  console.log(chalk.green(`║      Especialidades:                               ║`));
  console.log(chalk.green(`║   - Recrutamento e seleção de talentos             ║`));
  console.log(chalk.green(`║   - Treinamento e desenvolvimento                  ║`));
  console.log(chalk.green(`║   - Gestão de benefícios e folha de pagamento      ║`));
  console.log(chalk.green(`║   - Atendimento e suporte ao colaborador           ║`));
  console.log(chalk.green(`║                                                    ║`));
  console.log(chalk.green(`║`) + chalk.black.bgWhite(` 0. Voltar ao menu anterior                         `) + chalk.green(`║`));
  console.log(chalk.green.bold(`╚════════════════════════════════════════════════════╝`));
  functions3.PerguntaOpcao("Aperte para Voltar...");
}