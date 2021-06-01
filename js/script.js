var output = document.getElementById('output');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        output.innerHTML += "Fizz";
    }

    if (i % 5 === 0) {
        output.innerHTML += "Buzz";
    }
    
    if (i % 3 !== 0 && i % 5 !== 0) {
        output.innerHTML += i;
    }

    output.innerHTML += "</br>";
}