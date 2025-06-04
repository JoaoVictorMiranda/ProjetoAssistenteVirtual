import boxen from "boxen";
import chalk from "chalk";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

console.log(
  boxen("Mensagem importante", { padding: 1, borderStyle: "double" })
);

console.log(
  chalk.blue("Texto azul") + " e " + chalk.red.bold("vermelho e negrito")
);

console.log(
  ` ${chalk.bgYellowBright("BOM DIA")} Algumas vão estar sem nada ${chalk.red(
    "Algumas vão estar coloridas"
  )} `
);
