if( 5 > 3 ) {
    console.log("is greater than");
}

if( "cat".length === 3 ) {
    console.log("is the length")
}

if( "cat" === "dog" ) {
    console.log("is the same")
}
else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}
if ( person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}
if ( person.name.charAt(0) === "B" ) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}
if( person.name.charAt(0) === "B" && person.age >= 18 ) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}

if( 1 === "1") {
    console.log("strict")
}
else if( 1 == "1") {
    console.log("loose")
}
else {
    console.log("not equal at all")
}

if( 1 <= 2 && 2 === 4) {
    console.log("yes")
}
else {
    console.log("no")
}

if( typeof "dog" === "string" ) {
    console.log("dog is a string")
}
else {
    console.log("dog is not a string")
}

if( typeof "true" === "boolean" ) {
    console.log("true with parenthesis is a boolean")
}
else {
    console.log("true with parenthesis is not a boolean")
}

if( typeof true === "boolean" ) {
    console.log("true without parenthesis is a boolean")
}
else {
    console.log("true without parenthesis is not a boolean")
}

let name = "Aaron"; 
if( typeof name !== "undefined" ) {
    console.log("defined")
}
else {
    console.log("undefined")
}

if( "s" > 12 ) {
    console.log("s is greater than 12")
}
else {
    console.log("s is not greater than 12")
}

413 % 2 === 0 ? console.log ( "The number is even." ) : console.log( "The number is odd." )