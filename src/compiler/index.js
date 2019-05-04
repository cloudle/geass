import { Parser } from 'jison';
import grammar from './grammar';

const parser = new Parser(grammar);
// const parserSource = parser.generate();

console.log(parser.parse('function + 1 + 1'));
