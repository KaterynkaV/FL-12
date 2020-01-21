function Fighter(fighter){
	fighter.hpPoints = fighter.hp;
	fighter.wins = 0;
	fighter.loss = 0;
	return{
		getName: () => fighter.name,
		getDamage: () => fighter.damage,
		getStrength: () => fighter.strength,
		getAgility: () => fighter.agility,
		getHealth: () => fighter.hp,
		attack: function (defender){
			const MAX = 100;
			if(Math.round(Math.random() * MAX) <=
				MAX - defender.getStrength() - defender.getAgility()){
				defender.dealDamage(this.getDamage());
			console.log(
				`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`
				);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	},
	logCombatHistory: function(){
		console.log(`Name: ${this.getName}, Wins: ${this.wins}, Losses: ${this.loss}`)
	},
	heal : function(amountHp){
		if (fighter.hpPoints + amountHp > this.getHealth){
			fighter.hpPoints = this.getHealth;
		} else {
			fighter.hpPoints = fighter.hpPoints + amountHp;
		}
		return fighter.hpPoints;
	},
	dealDamage: function(amountDmg) {
		if (fighter.hpPoints - amountDmg < 0) {
			fighter.hpPoints = 0;
		} else {
			fighter.hpPoints = fighter.hpPoints - amountDmg;
		}
		return fighter.hpPoints;
	},
	addWin: () => fighter.wins++,
	addLoss: () => fighter.loss++
}
}
function battle(fighter1, fighter2){
	console.log(fighter1.getHealth());
	if (fighter1.getHealth() === 0) {
		console.log(`${fighter1.getName()} is dead and can't fight`);
	} else if(fighter2.getHealth() === 0){
		console.log(`${fighter2.getName()} is dead and can't fight`);
	}
	while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
		console.log(fighter1.attack(fighter2));
		if (fighter2.getHealth() > 0) {
			console.log(fighter2.attack(fighter1));
		}
	}
	if (fighter1.getHealth() === 0){
		fighter1.addLoss();
		fighter2.addWin();
		console.log(`${fighter1.getName()} health: ${fighter1.getHealth()}`);
		console.log(`${fighter2.getName()} health: ${fighter2.getHealth()}`);
		console.log(fighter1.logCombatHistory());
		console.log(fighter2.logCombatHistory());
	} else if (fighter2.getHealth() === 0) {
		fighter2.addLoss();
		fighter1.addWin();
		console.log(`${fighter1.getName()} health: ${fighter1.getHealth()}`);
		console.log(`${fighter2.getName()} health: ${fighter2.getHealth()}`);
		console.log(fighter1.logCombatHistory());
		console.log(fighter2.logCombatHistory());
	}
}
const myFighter1 = new Fighter({
	name: 'Bird',
	damage: 20,
	hp: 0,
	strength: 50,
	agility: 27
});
const myFighter2 = new Fighter({
	name: 'Lion',
	damage: 80,
	hp: 100,
	strength: 25,
	agility: 30
});
battle(myFighter1, myFighter2);