import chalk from "chalk";

export async function Carregando(
  ms,
  pontos = 3,
  mensagem = "Pronto Redirecionando"
) {
  let parte = ms / pontos;
  for (let i = 0; i < pontos; i++) {
    process.stdout.write(".");
    await sleep(parte);
  }
  console.log(mensagem);
  await sleep(ms / 2);
}

export async function Inicial(ms, ponto, msg) {
  process.stdout.write("\x1B[2J\x1B[0f");
  console.log(`${chalk.bgCyan("######################################")}`);
  console.log(`##########${chalk.blue("CARREGANDO AGUARDE")}##########`);
  console.log(`${chalk.bgCyan("######################################")}`);
  await Carregando(ms, ponto, msg);
  process.stdout.write("\x1B[2J\x1B[0f");
}

export function deletar() {
  return process.stdout.write("\x1B[2J\x1B[0f");
}

function sleep(milisegundos) {
  return new Promise((ok, nok) => {
    setTimeout(ok, milisegundos);
  });
}
