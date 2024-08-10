

// TODO: create an array 'data_final' that contains all the states, population, absCases, absDeaths, as well as relCases and relDeaths

// use an array method to solve this task

let data_final = []

data.forEach((state, index)=>{

    // start by logging state and index
   // TODO
    //console.log(state, index)

    // state is a dictionary/object - add key value pairs for relCases and relDeaths
    // TODO

    state['relCases'] = state['absCases'] / state['population'] * 100
    state['relDeaths'] = state['absDeaths'] / state['population'] * 100


    // push each state into data_final
    data_final.push(state)
})

// TODO: log data_final and check whether the data now contains relCases and relDeaths
console.log(data_final)


// TODO: sort all the states by population!
//let sorted_states = ...
data_final.sort( (a, b) => {
    return b.population - a.population;
});

// TODO: Filter the sorted data!
//let largest_states = ...
largest_states = data_final.filter((row, index) => {
    return index < 5;
})

data_final.sort( (a, b) => {
    return b.absCases - a.absCases;
});

cases_states = data_final.filter((row, index) => {
    return index < 5;
})


// TODO: Log the top five states
console.log(largest_states)
console.log(cases_states)

// TODO: Create barchart with population by calling the renderBarChartLeft function. You will need to provide largest_states as arguments
renderBarChartLeft(largest_states)
renderBarChartMiddle(cases_states)