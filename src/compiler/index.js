import { Parser } from 'jison';
import bnf from './bnf';
import operators from './operators';
import tokenizer from './tokenizer';
import * as yyNodes from './nodes';

const parser = new Parser({
	comment: 'Geass Parser',
	operators,
	bnf,
});

parser.yy = yyNodes;
parser.lexer = {
	lex() {
		let tag = '';
		const token = parser.tokens[this.pos++];
		if (token) {
			[tag, this.yytext, this.yylloc] = token;
			parser.errorToken = token.origin || token;
			this.yylineno = this.yylloc.first_line;
		}

		return tag;
	},
	setInput(tokens) {
		parser.tokens = tokens;
		this.pos = 0;
	}
};

const tokens = tokenizer(`1 + 4! + 10`);
console.log(parser.parse(tokens));
