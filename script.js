const words = {
    needs: ["thinker", "planner", "leader", "motivator", "lover", "warrior"],
    feel: ["inspiring", "encouraging", "enraged", "amusing", "like the world is not enough", "the urge to conquer the world"],
    should: ["try something new", "run at least for 30 minutes", "talk to a stranger", "learn something new", "chill and drink beer", "call your mother!"]
}

// empty quotes that will be filled later in a loop
let todaysQuote = []

// generates a random number so that it can be used to select a string from a objects array
function randomnumber (num) {
    return Math.floor(Math.random() * num)
}

// loops through the object properties and randomly selects one string from the arrray
for (const object in words) {

    let number = randomnumber(words[object].length);
    //console.log(number);

        if (object == 'needs') {
            todaysQuote.push(`>> Everyone needs a ${words[object][number]}`);
        } else if (object == 'feel') {
            todaysQuote.push(`>> Today, you feel ${words[object][number]}`);
        } else if (object == 'should') {
            todaysQuote.push(`>> Today you should ${words[object][number]}`);
        }
}

// formats the three quotes so the output is readable 
let formatedQuotes = todaysQuote.join('\n')
console.log(formatedQuotes);