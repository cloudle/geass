const rules = [
	["\\s+",																	"/* ignore */"],
	["[0-9]+(?:\\.[0-9]+)?\\b",								"return 'NUMBER'"],
	["\\*",																		"return '*'"],
	["\\/",																		"return '/'"],
	["-",																			"return '-'"],
	["\\+",																		"return '+'"],
	["\\^",																		"return '^'"],
	["!",																			"return '!'"],
	["%",																			"return '%'"],
	["\\(",																		"return '('"],
	["\\)",																		"return ')'"],
	["PI\\b",																	"return 'PI'"],
	["E\\b",																	"return 'E'"],
	["$",																			"return 'EOF'"],
];

export default {
	rules,
};
