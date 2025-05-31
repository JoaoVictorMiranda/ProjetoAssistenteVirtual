import chalk from "chalk";

export async function Carregando(ms) {
  let Metade = ms / 3;
  process.stdout.write(".");
  await sleep(Metade);
  process.stdout.write(".");
  await sleep(Metade);
  process.stdout.write(".");
  await sleep(Metade);
  console.log("Pronto Redirecionando");
  await sleep(1000);
}

export async function Inicial() {
  process.stdout.write("\x1B[2J\x1B[0f");
  console.log(`${chalk.bgCyan("######################################")}`);
  console.log(`##########${chalk.blue("CARREGANDO AGUARDE")}##########`);
  console.log(`${chalk.bgCyan("######################################")}`);
  await Carregando(2000);
  process.stdout.write("\x1B[2J\x1B[0f");
}

function sleep(milisegundos) {
  return new Promise((ok, nok) => {
    setTimeout(ok, milisegundos);
  });
}
