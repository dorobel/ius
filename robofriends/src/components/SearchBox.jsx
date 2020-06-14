import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search robots" onChange={searchChange} />
        </div>
    )
}

export default SearchBox

/*

///////////////////////////////////
// onchange event executes a JavaScript when a user changes the selected option of a <select> element for example:

<select onchange="myFunction()">

// Example

<select id="mySelect" onchange="myFunction()">
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Volvo">Volvo</option>
</select>

<p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

*/