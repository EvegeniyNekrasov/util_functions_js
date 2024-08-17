const DAY_STRING = "day";
const TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 24;

export function relativeTimeFormat(date, lang = "es") {
	const hoy = new Date();
	const fechaObjetivo = new Date(date);

	const timeDiference = fechaObjetivo - hoy;
	const dayDiference = Math.round(timeDiference / TWENTY_FOUR_HOURS);

	const formated = new Intl.RelativeTimeFormat(lang.toLowerCase(), {
		numeric: "auto",
	});
	return formated.format(dayDiference, DAY_STRING);
}
