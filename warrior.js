//## Warriors!
//* Create a file called `warriors.js`, then, do the following. Commit and push as often as you 
//like so that we can monitor the progress of your code in the pull request.
//  * Create a constructor function called `Warrior` that can create new warriors. This function 
//will take parameters `name`, and `gender`. `name` can be any string, `gender` can be `M` or `F`.
//It should create a warrior that has these properties:
//    * `name`: the value that was passed to the constructor
//    * `gender`: the value that was passed to the constructor
//    * `level`: 1
//    * `weapon`: wooden sword
//    * `power`: a random number between 1 and 100
//  * In addition to that, every object that gets created should have the following methods:
//    * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
//    * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each 
//opponent, this method should output to the console which player won the fight based on their 
//power. Be as creative as you like with the text of this method :)
//  * Finally, create a bunch of warriors and make them fight together.
function Warrior (name, gender) { // this is the constructor fuction, with the capital letter at the beginning!!
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.random() * 100; // Math.random will give random number between 0 and 1. then we multiply it by 100, that will give us a number between 1 and 100
}
Warrior.prototype = {  // .prototype is to give prototype to the warriors
    fight: function(){
        if (this.gender === "M"){
            console.log (this.name + " rushes to the arena with his " + this.weapon);
        }
        else {
            console.log (this.name + " rushes to the arena with her " + this.weapon);
        }
    },
    faceoff: function(opponent){
        if (opponent.power > this.power){
            console.log ("Opponent won");
        }
        else if (opponent.power < this.power){
            console.log ("Opponent lost");
        }
        if (opponent.power === this.power){
            console.log ("Both are great fighters");
        }
    }
};
    
var dave = new Warrior("David", "M");
var rambo = new Warrior("Rambo", "M");
var arnold = new Warrior("Arnold", "M");
var codrin = new Warrior("Codrin", "M");
var thora = new Warrior("Thora", "F");
console.log(dave);
console.log(dave.name);
console.log(dave.faceoff(rambo));
console.log(rambo);
console.log(rambo.name);
console.log(rambo.faceoff(dave));
console.log(thora);
console.log(thora.name);
console.log(thora.faceoff(codrin));

    
    


