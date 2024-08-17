/**
 * Formatea un número como una moneda específica.
 *
 * @param {number} number - El número que será formateado.
 * @param {Object} [options] - Opciones para el formato.
 * @param {string} [options.currency=EUR] - El código de la moneda.
 * @param {string} [options.lang=es-ES] - El código de idioma y región.
 * @returns {string} - El número formateado como una cadena de texto con el formato de moneda.
 */
export function formatNumberWithCurrency(
	number,
	{ currency = "EUR", lang = "es-ES" } = {},
) {
	if (typeof number !== "number") {
		throw new TypeError('El argumento "number" debe ser un número.');
	}
	try {
		return new Intl.NumberFormat(lang, {
			style: "currency",
			currency: currency,
		}).format(number);
	} catch (error) {
		console.error("Error formateando el número:", error);
		return number.toString();
	}
}
