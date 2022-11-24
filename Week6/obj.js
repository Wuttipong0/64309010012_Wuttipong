let obj ={
    "firstName":" John",
    "lastName":" Smith",
    "age":25,
    "adderss":{
        "streetAddress":"21 2nd Street",
        "city":"New York",
        "state":"NY",
        "postalCode": "10021-3100"
    },
    "phoneNumbers": [{
    "type": "home",
    "number": "212 555-1234"
    },
    {
    "type": "office",
    "number": "646 555-4567"
    },
    {
    "type": "mobile",
    "number": "123 456-7890"
    }
    ],
    "children": [],
    "spouse": null

};

console.log(obj.firstName + obj.lastName);
console.log(obj.adderss.streetAddress);
console.log(obj.phoneNumbers[1].namber );