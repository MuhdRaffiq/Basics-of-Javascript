//record collection

var collection = {
    "2548": {
        "album": "Slippery",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Hahaha"
        ]
    },
    "1245": {
        "artist": "Bon Jovi",
        "tracks": []
    },
    "5439": {
        "album": "ABBA",
    }

};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));