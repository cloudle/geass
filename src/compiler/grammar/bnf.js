class GeassAst {
	constructor() {

	}
}

function p(patternString, action, options) {
	return [patternString, action, options];
}

export default {
	expressions: [["e EOF",   "return $1"]],

	e :[
		p('e + e', '$$ = $1+$3'),
		p('e - e', '$$ = $1-$3'),
		p('e * e', '$$ = $1*$3'),
		p('e / e', '$$ = $1/$3'),
		p('e ^ e', '$$ = Math.pow($1, $3)'),
		p('e !', '$$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($1)'),
		p('e %', '$$ = $1/100'),
		p('- e', '$$ = -$2', { prec: 'UMINUS' }),
		p('( e )', '$$ = $2'),
		p('NUMBER', '$$ = Number(yytext)'),
		p('E', '$$ = Math.E'),
		p('PI', '$$ = Math.PI'),
		p('IF', '$$ = 2'),
		p('AND', '$$ = 1'),
		p('EQUAL', '$$ = 5'),
		p('UNEQUAL', '$$ = 10'),
		p('FUNCTION', '$$ = 1'),
	]
};
