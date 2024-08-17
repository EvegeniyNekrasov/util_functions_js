export function displayRagionNames(region, lang = "es") {
	return new Intl.DisplayNames([lang], {
		type: "region",
	}).of(region.toUpperCase());
}
