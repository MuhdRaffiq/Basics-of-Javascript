// Example Object

var ourDoug = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};


// Setup

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "claets"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);


var testObj1 = {
    "hat bro": "ballcap",
    "shirt bro": "jersey",
    "shoes bro": "claets"
};

var shirtValue1 = testObj1["shirt bro"];

console.log(shirtValue1);

// accessing the object properties using var


var testObj2 = {
    "hat": "ballcap",
    12: "jersey",
    19: "claets"
};

var Value = 12;

var player = testObj2[Value];

console.log(player);



// changing the object properties data
var testObj3 = {
    "hat": "ballcap",
    12: "jersey",
    19: "claets"
};


testObj3.hat = "snowcap";

console.log(testObj3.hat); 

// adding new properties

var myDog1 = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

myDog1['bark'] = "woof";

console.log(myDog1.bark);


// delete properties in object

var myDog2 = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": [],
    "bark": "woof"
};

delete myDog2['bark']

console.log(myDog2.bark);

// using object for lookup

function phoneticLookup(val) {
    var result = "";

    //look up object

    var lookup = {
        "alpha": "Adams",
        "bravo": "boston",
        "charlie": "chicago"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("alpha"));


//testing property in the obkect

var testObject_ = {
    "gift": "glass",
    "shirt": "sweater",
    "pet": "cat"
}

function checkObj_(prop) {

    if (testObject_.hasOwnProperty(prop)) {
        return testObject_[prop];
    } else {
        return "None";
    };
}

console.log(checkObj_("shirt"));

// manipulating complex object

var myMusic = [
    {
        "artist": "Billy",
        "title": "Piano Man",
        "realease year": 1973,
        "format": [
            "CD",
            "8T"
        ],
        "Gold": true
    },
    {
        "artist": "linda",
        "title": "cool",
        "realease year": 2000,
        "format": [
            "DVD",
            "8T"
        ],
        "Gold": false
    }
]


//accessing nested object

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var myGlove = myStorage.car.inside["glove box"];

console.log(myGlove);



//accessing nested array

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "balak"
        ]
    }
];

var secondTree = myPlants[1].list[2];

console.log(secondTree);


