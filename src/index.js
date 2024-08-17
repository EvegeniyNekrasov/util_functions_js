import * as dateUtils from "./main.js";

const dates = [
    "2024/01/01",
    "2024/05/17",
    "2024/03/04",
    "2023/02/26",
    "2020/08/19",
]

const formatedDates = dates.map(date => dateUtils.relativeTimeFormat(date));
console.table(formatedDates);