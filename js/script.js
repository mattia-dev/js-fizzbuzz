var output = document.getElementById('output');

var fizzbuzzNumbers = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        var n = "Fizz";
        output.innerHTML += n;
    }

    if (i % 5 === 0) {
        var n = "Buzz";
        output.innerHTML += n;
    }
    
    if (i % 3 !== 0 && i % 5 !== 0) {
        var n = i;
        output.innerHTML += n;
    }

    output.innerHTML += "</br>";

    fizzbuzzNumbers.push(n);
}

console.log(fizzbuzzNumbers);