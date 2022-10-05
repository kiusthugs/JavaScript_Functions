console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if (count < 0) {
        for (let i = -1; i >= count; i -= 2) {
            console.log(i)
        }
    } else {
        for (let i = 1; i <= count; i++) {
            if (i % 2 > 0) {
                console.log(i)
            }
        }
    }
}

printOdds(-11)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = 'Anonymous', age = 0) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen =  `Sorry ${userName}, but you need to wait until you're 16.`
    if (age < 16) {
        console.log(belowSixteen)
    } else {
        console.log(aboveSixteen)
    }
}

checkAge()

//Exercise 3
function coords(x, y) {
    if (x === 0 && y !== 0) {
        console.log(`${x}, ${y} is on the y axis`)
    } else if (y === 0 && x !== 0) {
        console.log(`${x}, ${y} is on the x axis`)
    }

    if (x > 0) {
        if (y > 0) {
            console.log(`${x}, ${y} is in Quadrant 1`)
        } else {
            console.log(`${x}, ${y} is in Quadrant 4`)
        }
    }

    if (x < 0) {
        if (y > 0) {
            console.log(`${x}, ${y} is in Quadrant 2`)
        } else {
            console.log(`${x}, ${y} is in Quadrant 3`)
        }
    }
}

coords(-6, 18)

// Exercise 4
