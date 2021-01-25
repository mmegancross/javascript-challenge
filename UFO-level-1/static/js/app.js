// from data.js
var UFOs = data;

// call function to load data first -- one big function
// check for input field, if input is not blank then run filtering function, else load page like the first time

// YOUR CODE HERE!

//Append data to html table 
var tbody = d3.select("tbody")

UFOs.forEach((ufoSighting) => {
    //console.log(ufoSighting)
    var row = tbody.append("tr");
   
    Object.entries(ufoSighting).forEach(([key, value]) => {
        //console.log(key, value)
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select button and form
var button = d3.select("#filter-btn");
var form = d3.select("form") 

 // Create event handlers 
button.on("click", searchTable);
form.on("submit", searchTable);

// Select the input element 
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue);

function runEnter() {
    d3.event.preventDefault();
    console.log("submit!");

    // Select the input element 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //Filter data 
    var filteredData = UFOs.filter((Sighting) => Sighting.datetime === inputValue);
    console.log(filteredData);

    // Render onto page 
    filteredData.forEach((result) => {
        //console.log(result);
        var row = tbody.append("tr");
        
        Object.entries(result).forEach(([key, value]) => {
                //console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
         });
    });
};

function searchTable(inputValue, UFOs){
    d3.event.preventDefault();
    console.log("submit!");

    var filteredData = []

    var filtersearch = UFOs.filter((Sighting) => Sighting.datetime === inputValue);
    console.log(filtersearch);

    if (filtersearch.includes(inputValue)) {
        filteredData.push(UFOs)}

    return filteredData
}
