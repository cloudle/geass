import { Parser } from 'jison';
import grammar from './grammar';
import * as yyNodes from './nodes';

const parser = new Parser(grammar);
parser.yy = yyNodes;
// const parserSource = parser.generate();

console.log(parser.parse(`4! + function`));
