class GeassAst {
	constructor() {

	}
}

/*Since we're going to be wrapped in a function by Jison in any case, if our
* action immediately returns a value, we can optimize by removing the function
* wrapper and just returning the value directly.
**/
const unwrap = /^function\s*\(\)\s*\{\s*return\s*([\s\S]*);\s*\}/;

function p(patternString, action, options) {
	let actionString = action || '$$ = $1';

	if (typeof action === 'function') {
		const match = unwrap.exec(action);
		if (match) { action = match[1] } else { action = `(${action})()` }
		action = action.replace(/\bnew /g, '$&yy.');

		actionString = `$$ = ${action}`;
	}

	return [patternString, actionString, options];
}

export default {
	expressions: [["e EOF",   "return $1"]],

	e :[
		p('e + e',					() => $1 + $3),
		p('e - e',					() => $1 - $3),
		p('e * e',					() => $1 * $3),
		p('e / e',					() => $1 / $3),
		p('e ^ e',					() => Math.pow($1, $3)),
		p('e !',						() => yy.factor(yy, $1)),
		p('e %',						() => $1 / 100),
		p('- e',						() => -$2, { prec: 'UMINUS' }),
		p('( e )',					() => $2),
		p('NUMBER',					() => Number(yytext)),
		p('E',							() => Math.E),
		p('PI',							() => Math.PI),
		p('IF',							() => 2),
		p('AND',						() => 1),
		p('EQUAL',					() => 5),
		p('UNEQUAL',				() => 10),
		p('FUNCTION',				() => new FuncGlyph($1)),
	]
};
