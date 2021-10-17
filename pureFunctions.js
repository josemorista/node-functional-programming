const kill = (gremlinA, gremlinB) => ({ power: gremlinA.power + gremlinB.power });

const eat = (gremlinA, gremlinB) => ({ power: gremlinA.power * gremlinB.power });

const createGremlin = (power) => ({ power });

const small = createGremlin(0);
const mid = createGremlin(2);
const big = createGremlin(4);

const Alan = kill(eat(kill(big, small), mid), eat(big, mid));

console.log(Alan);

// Class with pure functions

class Gremlin {
	constructor(power) {
		this.power = power
	};

	eat(gremlin) {
		return new Gremlin(this.power * gremlin.power);
	}

	kill(gremlin) {
		return new Gremlin(this.power + gremlin.power);
	}
}

const sm = new Gremlin(0);
const md = new Gremlin(2);
const bg = new Gremlin(4);

const Al = bg.kill(small).eat(mid).kill(bg.eat(mid));

console.log(Al);

