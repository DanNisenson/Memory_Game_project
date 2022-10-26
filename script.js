let rows = 4;
let columns = 4;


// Math.floor( Math.random() * (rows * columns / 2) )
// Math.random -> check if it's included in numbers && not repeated more than once
let numbers = []; // array 1 ... rows * columns / 2;
for (let i = 1; i <= rows * columns / 2; i++) {
    numbers.push(i, i);
}


let tableElement = document.getElementById('table')

// make table and inner elements
for (let i = 1; i <= rows; i++) {
    let row = document.createElement('tr');
    row.id = `row${i}`;
    tableElement.appendChild(row)
    for (let j = 1; j <= columns; j++) {
        let cell = document.createElement('td');
        cell.id = `cell${i}_${j}`;
        row.appendChild(cell);
        let input = document.createElement('input');
        input.type = 'button';
        //input.value = 'perrito';
        cell.appendChild(input);
    }
}

