var	a: number = 456;

function	isPair(nombre: number, callback: (number) => void ): boolean {
	return (nombre % 2 === 0);
}

function	printUser(user: {id: number | string, name: string, nickname?: string}): void {
	if (typeof user.id !== 'number') {
		user.id = parseInt(user.id, 10);
	}
	// the compiler know user.id is a number
	user.id = 4 * <number>user.id;
	console.log(user);
}

function	salut(t: Array<string>): Array<string> {
	let	out = [];

	for (let item of t) {
		out.push('Salut' + item);
	}
	return (out);
}

isPair(a, function (reste) {
	console.log(reste);
})

salut(['aze', 'izi', '45'])

