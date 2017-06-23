
//Object Literal
var player = {
	//properties
		name 			: "",
		life 			: 100,
		damage 			: 0,
		hasSniperRifle  : true,
		hasSword		: false,
		rank 			: ["soldier", "mage", "spartan", "barbarian"],
	//methods
	challenge			: function () {
		console.log("sir, would you care to do a battle?");
	},

	fight			:function(){
		console.log("Would you care to fight " + this.name + "?")
	},

	attack			:function(target){
		console.log(this.name + " attacks " + target.name + " for " + this.damage);
	 this.life -= this.damage;
	},

	attacked 		:function(attacker){
		console.log(this.name + " has been attacked by " + attacker)
	},

	pickedUpSword	:function(){
		if (this.hasSword === true) {
			console.log(this.name + " picked up the sword")
		}
	},

	health			:function(){
		console.log(this.name + "'s health is " + this.life)
	}



};





var saul = Object.create(player);
saul.name = "saul";
saul.life = 120;
saul.damage =20;
saul.hasSniperRifle = true
saul.rank = "mage"
saul.fight();
saul.health();
saul.attacked(bree)

var bree = Object.create(player);
bree.name = "bree";
bree.life = 140;
bree.damage = 45;
bree.hasSword = true;
bree.rank = "spartan";
bree.attack(saul);
bree.pickedUpSword();

