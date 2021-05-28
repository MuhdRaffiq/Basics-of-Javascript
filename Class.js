/* this is the file where I join the 3 hours class of javascript
*/

/*data type:
undefined, null, boolean, string, symbol, number, and object
*/

var a;

console.log(a);

var a = 15;

console.log(a);

var a = "saya tahik";

console.log(a);

var a = "hahahaha babi \"jkahsd\" iughi"

console.log(a);


function ourReusableFunction() {
    console.log("pala bapak kau");
}

//ourReusableFunction();
//ourReusableFunction();

var myGlobal = 10;

function test1 () {

    oopGlobal = 5;  //putting var at the front willautomatically made this variable a local variable in the function, remove var it will be global 

}


function test2 () {

    var output = "";

    if (typeof myGlobal != undefined) {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopGlobal != undefined) {
        output += "oopGlobal: " + oopGlobal;
    }

    console.log(output);
}
test1();
test2();

var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());


function minusSeven(num) {
    return num -7;
}

console.log(minusSeven(10));


function trueOrFalse(wasThatTrue)  {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

// = assign new data into the variables
// == to check if its equal or not without checking data type
// === strict equal, check if it is the both data type and its value
// != opposite of ==
// !== opposite of ===

console.log(trueOrFalse(false));

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(99));


function testLessOr(val) {
    if (val <= 12) {                    //return will end the function so here the first logic fulfill the function thus end the function 
        return "smaller than 12";
    }

    if (val <= 50) {
        return "smaller than 50"
    }

    return "it was more"
}

console.log(testLessOr(10));

/*
logical comparison
&& and
|| or
*/

function testIfElse(num) {
    if (num < 5) {
        return "less than 5";
    } else if (num < 10) {        //chain the if logic using else if and end with else
        return "less than 10";
    } else {
        return "fuck me idk"
    }
}

console.log(testIfElse(4));

