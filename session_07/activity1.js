let rides = [
    {id: "ride1", name: "Treetop Drop", cost: "$3", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], children: true},
    {id: "ride2", name: "Swooping Eagle", cost: "$2", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], children: false},
    {id: "ride3", name: "Skyfall", cost: "$5", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], children: false}
];

let amusementRidesDouble = doublePrices(rides);

for (i = 0; i < amusementRidesDouble.length; i++) {
    console.log(amusementRidesDouble[i])
}

debugAmusementRides()

// Implementation of the function
function doublePrices(amusementRides) {
    ride_prices = []
    for (let i = 0; i < amusementRides.length; i++) {
        if (i == 1) {
            ride_cost = amusementRides[i].cost
            ride_cost = ride_cost.replace('$', '')
            ride_prices.push(ride_cost)

        } else {
            ride_cost = amusementRides[i].cost
            ride_cost = ride_cost.replace('$', '')
            ride_cost = ride_cost * 2
            ride_prices.push(ride_cost)
        }
    }
    return ride_prices
}

function debugAmusementRides() {
    for (i = 0; i < rides.length; i++) {
        console.log(rides[i].name + ": " + amusementRidesDouble[i])
    }

    document.getElementById("content-1").innerHTML = '<h1>Rides and Info</h1>Ride Names, Cost, and Open Days';

    let result = ''
    for (let i = 0; i < rides.length; i++) {
        result += "<br/>" + "Name: " + rides[i].name + "<br/>" + "Cost: $" + amusementRidesDouble[i] + "<br/>" + "Open Days: " + rides[i].days.toString() + "<br/>" ;
    }
    document.getElementById("content-2").innerHTML = result;
}

// console.log(rides[0].days[1])
// console.log(rides[1].cost)
// console.log(rides[2].name)