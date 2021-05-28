function caseSwitch(val) {
    var answer = "";
    
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "charlie"
            break;
        case 4:
            answer = "delta"
            break;
    }

    return answer;
}

console.log(caseSwitch(2));


function switchingCases(val) {
    var answer = "";
    
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "chair"
            break;
        case "d":
            answer = "dot"
            break;
        default:
            answer = "something"
            break;
    }

    return answer;
}

console.log(switchingCases(2));

function poolSwitching(val) {
    var answer = "";

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:
            answer = "idk";
            break
    }
    return answer;
}

console.log(poolSwitching(5));


function chainToSwitch(val) {
    var answer = "";
    // only chnage the code

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "is the answer";
            break;
        case 1:
            answer = "there is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate nine";
            break;
        default:
            answer = "no answer";
            break
    }

    return answer;
}

console.log(chainToSwitch(151));

function isLess(a,b) {
    // fix this code
    return a < b;
}

console.log(isLess(2, 10));

function abTest(a, b) {
    // Only change code below this line

    if (a <0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));