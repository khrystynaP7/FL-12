const fighter1 = new Fighter ({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const fighter2 = new Fighter ({name: 'Alex', damage: 30, hp: 110, strength: 60, agility: 15});

function Fighter(myFighter) {
    const name = myFighter.name;
    let damage = myFighter.damage;
    let hp = myFighter.hp;
    let strength = myFighter.strength;
    let agility = myFighter.agility;
    let wins = 0;
    let losses = 0;

    function getName() {
        return name;
    }

    function getDamage() {
        return damage;
    }

    function getStrength() {
        return strength;
    }

    function getAgility() {
        return agility;
    }

    function getHealth() {
        return hp;
    }
 
    function attack (fighter2) {
        let success = 100 - (fighter2.getAgility() + fighter2.getStrength()); 
        let random = Math.random() * 100;
        let attacksuccess = random < success;
        if (attacksuccess) {
            fighter2.dealDamage(getDamage());
            console.log(getName() + ' make ' + getDamage() + ' damage to ' + fighter2.getName());
        } else {
            console.log(getName() + "'s attack is missed") 
        }
    }

    function logCombatHistory() {
        console.log('Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses);
    }

    function heal(health) {
        if(health + hp <= myFighter.hp) {
            hp += health;
        } else if(health + hp > myFighter.hp) {
            hp = myFighter.hp;
        }
    }

    function dealDamage(healthPoints) {
        if(hp - healthPoints >= 0) {
            hp -= healthPoints;
        } else if (hp - healthPoints < 0) {
            hp = 0;
        }
    }

    function addWin() {
        wins++;
    }

    function addLoss() {
        losses++;
    }

    return {
        getName,
        getDamage,
        getStrength,
        getAgility,
        getHealth,
        attack,
        logCombatHistory,
        heal,
        dealDamage,
        addWin,
        addLoss
    }
}


function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {    
        do {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        } while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0);
        if (fighter1.getHealth() <= 0) {
            console.log('The winner of the battle is ' + fighter2.getName())
            fighter1.addLoss();
            fighter2.addWin();
        } else if(fighter2.getHealth() <= 0) {
            console.log ('The winner of the battle is ' + fighter1.getName())
            fighter2.addLoss();
            fighter1.addWin();
        }
    } else {
        if (fighter1.getHealth() <= 0) {
            console.log(fighter1.getName() + " is dead and can't fight")
        } else if (fighter2.getHealth() <= 0) {
            console.log(fighter2.getName() + " is dead and can't fight")
		}
	}
}