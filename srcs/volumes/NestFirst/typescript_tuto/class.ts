import { DemoInterface } from './interface';

class	DemoClass {

	// private, protected and public like c++
	private	_element: string;

	constructor(options: DemoInterface) {
		
	}

	demo() {
	}

	static	static_demo () {
	}

	// use tsc -t es5 to enable accessors
	set	element(value: string) {
		this._element = value;
	}

	get	element(): string {
		return (this._element);
	}

}

let d = new DemoClass({autoplay: true, x: 4});

d.demo();

DemoClass.static_demo();
