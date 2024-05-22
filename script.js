/* Task 1
Write a loop that console.log 1-12 */

function forLoop (){
    for (let i = 0; i <= 12; i++) {
        console.log(i);
    }
}

forLoop();


/* Task 2
Write a loop that outputs the 7 times table */

function timesTable (number){
    for (let i = 0; i <= 12; i++) {
        console.log(`${number} x ${i}= `, number * i);
    }
}

let n = prompt ("What times table would you like to learn?"); 
timesTable(n);


/* Task 3
Create an array of your favourite foods
Print some of them to the screen */

function faveFoods (f){

    const food = ["Cake", "chocolate", "biscuits", "pastry"];
    food.push(`${f}`);
    for (let i = 0; i < food.length; i++) {
        console.log(food[i]);
    }

}

let f = prompt ("What is your favourite food?"); 
faveFoods(f);


/* Task 4
Create an object to hold information on your favourite recipe. Then display the properties on screen.
Bonus Points: Create a loop to list all the ingredients and directions 

Task 5

Add a function called letsCook

Have it say: "I'm hungry! Let's cook..." with the name of your recipe title.

Call your new method.*/

function recipe(){

    const recipe = {
        title: "Pancakes",
        servings: 2,
        ingredients: ["450g Flour", "30g Sugar", "5g baking powder", "60ml oil", "3 cups milk"],
        directions: ["In a bowl, combine flour, sugar, baking powder, and salt. Add remaining ingredients and whisk until mixture is smooth.", "Heat 1 tablespoon oil (15 mL) in a non-stick pan over medium heat. Pour about 1/4 cup (60 mL) of batter into pan. ", "Cook pancake for 2 minutes on each side until lightly golden. Repeat with remaining batter, adding oil as needed. Top pancakes with maple syrup and seasonal fruit."],
        letsCook: function() {
            console.log(`I'm hungry! Let's Cook, ${recipe.title}`);
        },
    };

    recipe.letsCook();

    console.log(`${recipe.title} recipe`);
    console.log("The ingredients are");
    for (let i = 0; i < recipe.ingredients.length; i++) {
        console.log(recipe.ingredients[i]);
    }
    console.log("The directions are");
    for (let d = 0; d < recipe.directions.length; d++) {
    console.log(`${d + 1} - ${recipe.directions[d]}`);

    }
}

recipe();

