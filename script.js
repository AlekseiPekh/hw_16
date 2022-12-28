const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

// -1
function married_person() {
    const res = database.filter(function (value) {
        if (value.isMarried) {
            return database.values();
        }
    });
    return res;
}
console.log(married_person(database));

// -2
const sortAge = database.sort(function (a, b) {
    if (a.age>b.age){
        return 1;
    }
    if (a.age<=b.age){
        return -1;
    }
})
console.log(sortAge);

// -3
function avgAge() {
    const res = database.reduce(function (count, value, i, array) {
        count+= value.age;
        if (i === database.length - 1) {
            return count/database.length;
        }
        return count;
    },0);
    return res;
}
console.log(avgAge());

// -4
const StatCountry = database.reduce(function (count, value) {
    if (count[value.country]){
        count[value.country]++;
    } else {
        count[value.country] = 1;
    }
    return count;
}, {})
console.log(JSON.stringify(StatCountry));












