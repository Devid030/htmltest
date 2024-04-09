/* //
//
//


function sum (num1, num2) {
    return num1 * num2;
}

function show (a,b, callback) {
    let result = callback (a,b);
    console.log('5*5 =', result);
}

show(5,5, sum); */