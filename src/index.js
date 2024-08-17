import * as utils from "./main.js";

const dates = [
	"2024/01/01",
	"2024/05/17",
	"2024/03/04",
	"2023/02/26",
	"2024/08/18",
];
console.log(utils.displayRagionNames("es"));

const formatedDates = dates.map((date) => utils.relativeTimeFormat(date));
console.table(formatedDates);

console.log(utils.formatNumberWithCurrency(0.0));
