export default {
	expressions: [["e EOF",   "return $1"]],

	e :[
		["e + e",					"$$ = $1+$3"],
		["e - e",					"$$ = $1-$3"],
		["e * e",					"$$ = $1*$3"],
		["e / e",					"$$ = $1/$3"],
		["e ^ e",					"$$ = Math.pow($1, $3)"],
		["e !",						"$$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($1)"],
		["e %",						"$$ = $1/100"],
		["- e",						"$$ = -$2", { prec: 'UMINUS' }],
		["( e )",					"$$ = $2"],
		["NUMBER",				"$$ = Number(yytext)"],
		["E",							"$$ = Math.E"],
		["PI",						"$$ = Math.PI"],
		["IF",						"$$ = 2"],
		["AND",						"$$ = 1"],
		["OR",						"$$ = 1.5"],
		["EQUAL",					"$$ = 5"],
		["UNEQUAL",				"$$ = 10"],
		["FUNCTION",			"$$ = 1"],
	]
};
