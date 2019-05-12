export class Base {
	compile() {

	}
}

export function essentials(...args) {
	console.log(...args);
}

export function operator(value) {
	console.log(value, '<<');
	return Number(value);
}

export function factor(yy, n) {
	if (n === 0) return 1;
	return yy.factor(yy,n - 1) * n;
}
