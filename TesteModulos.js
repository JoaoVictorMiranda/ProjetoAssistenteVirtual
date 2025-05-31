import boxen from "boxen";
import chalk from "chalk";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const figlet = require("figlet");

console.log(
  boxen("Mensagem importante", { padding: 1, borderStyle: "double" })
);

console.log(
  chalk.blue("Texto azul") + " e " + chalk.red.bold("vermelho e negrito")
);

console.log(figlet.textSync("BEM VINDO"));

console.log(
  ` ${chalk.bgYellowBright("BOM DIA")} Algumas vão estar sem nada ${chalk.red(
    "Algumas vão estar coloridas"
  )} `
);
