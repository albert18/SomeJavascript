// This is some test!!

// function makeCoffee(sugar, percent)
// {
//     var instructions = "Boil Water";

//     instructions += "pour into cup";

//     instructions += " add " + sugar + "spoon of sugar";

//     instructions += " and some" + percent; 

//     return instructions;
// };

// console.log(makeCoffee(5,10));
// --------------------------------------------------------------------------------------Contructor

// Extra script - THIS IS EXTRA

// function Apple(x, y, color, score) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.score = score;
// }

// console.log(new Apple(10, 20, "red", 200)) ;

// --------------------------------------------------------------------------------------Prototype

function Apple(color, weight) 
{
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    eat: function() { return "eat some apple"; },
    throw: function() { return "throw the apple; "}
};

var apple1 = new Apple("red", 99);
var apple2 = new Apple("Blue", 199);
var apple3 = new Apple("Green", 299);
