const rules = [
	["\\s+",																	"/* ignore */"],
	["[0-9]+(?:\\.[0-9]+)?\\b",								"return 'NUMBER'"],
	["\\*",																		"return '*'"],
	["\\/",																		"return '/'"],
	["-",																			"return '-'"],
	["\\+",																		"return '+'"],
	["\\^",																		"return '^'"],
	// ["!",																			"return '!'"],
	["%",																			"return '%'"],
	["\\(",																		"return '('"],
	["\\)",																		"return ')'"],
	["PI\\b",																	"return 'PI'"],
	["E\\b",																	"return 'E'"],
	["true|yes|on",														"return 'TRUE'"],
	["false|no|off",													"return 'FALSE'"],
	["if",																		"return 'IF'"],
	["else",																	"return 'ELSE'"],
	["unless",																"return 'UNLESS'"],
	["for",																		"return 'FOR'"],
	["&&|and",																"return 'AND'"],
	["\\|\\||or",															"return 'OR'"], /* ||, or */
	["!=|<>|isnt",														"return 'UNEQUAL'"],
	["==|is",																	"return 'EQUAL'"],
	["function|=>|->",												"return 'FUNCTION'"],
	["\\|>",																	"return 'PIPE'"], /* |> */
	["@",																			"return 'THIS'"],
	["!|not",																	"return 'NOT'"],
	[".",																			"throw 'Illegal character'"],
	["$",																			"return 'EOF'"],
];

export default {
	rules,
};
