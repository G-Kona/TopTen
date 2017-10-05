var bk1 = "Ready Player One";
var bk2 = "Asteroid made of Dragons";
var bk3 = "Defenders";
var bk4 = "Battle Royale";
var bk5 = "This book is full of spiders";
var bk6 = "Dracula";
var bk7 = "Franeknstein";
var bk8 = "The Sparrow";
var bk9 = "The Hobbit";
var bk10 = "Necronomicon";

var topTen = [];
var authors = ["Ernest Cline", "G.Derek Adams", "Will McIntosh", "Houshun Takami", "David Wong", "Bram Stoker", "Mary Shelley", "Marie Doria Rusell", "J.R.R. Tolkien", "H.P. Lovecraft"];

topTen.push(bk1);
topTen.push(bk2);
topTen.push(bk3);
topTen.push(bk4);
topTen.push(bk5);
topTen.push(bk6);
topTen.push(bk7);
topTen.push(bk8);
topTen.push(bk9);
topTen.push(bk10);

var loop = true;

while (loop) {
    var input = prompt("Which top 10 book would you like?", "Pick a number: 1-10");
    if (input === "Pick a number: 1-10" || input === "" || !parseInt(input) || input === null) {
        alert("Please enter a number between 1 and 10!")
    }
    else {
        alert("Number " + input + " on the list is '" + topTen[input-1] + "' by " + authors[input-1] + ".")
        loop = false;
    }
}

for (var i = 0; i < topTen.length; i++) {
    console.log("Book " + (i + 1) + ": " + topTen[i] + " by " + authors[i])
}