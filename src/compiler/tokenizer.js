import JisonLex from 'jison-lex';

export default function(source) {
	const tokens = [];
	let tag = '';
	lexer.setInput(source);

	while (true) {
		const tag = lexer.lex();
		tokens.push([tag, lexer.yytext, lexer.yylloc]);
		if (tag === 'EOF') break;
	}

	return tokens;
}

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

const lexer = new JisonLex({ rules });
