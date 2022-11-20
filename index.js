// document.getElementById("count").innerText = 5

// let count = 5

// console.log(count)

// let myage = 19
// let humandogratio = 7

// let myDogAge = myage * humandogratio
// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonuspoints = 50
// console.log(bonuspoints)

// bonuspoints = bonuspoints + 50
// console.log(bonuspoints)

// bonuspoints = bonuspoints - 75
// console.log(bonuspoints)

// bonuspoints = bonuspoints +45
// console.log(bonuspoints)

// Incrementing by every click
// let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
// }

// Setting up a race countdown

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// //Fxn Call
// countdown()

//Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function logout(){
//     console.log(42)
// }

// logout()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a fxn that logs out the sum of all the lap times

// function comb_lap(){
//     let tlaps = lap1 + lap2 + lap3
//     console.log(tlaps)
// }

// comb_lap()

// Create a fxn that increments the lapsCompleted with one.
//Run it three times

// let lapsCompleted = 0
// function lapincrement(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// lapincrement()
// lapincrement()
// lapincrement()
//console.log(lapsCompleted)

let countEl = document.getElementById("count-el")

//console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}


// function save(){
//     console.log(count)
// }

// save()

// let username = "Edward Kamande"

// let message = "You have three new notifications"

// console.log(username)
// console.log(message)

// console.log(message + ", " + username + "!")  OR

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let fullName = "Edward Kamande Karogo"

// let greeting = "Hi Sir The road isnt easy Mr"

//let myGreeting = greeting + ", " + fullName + "."

//console.log(myGreeting)

// let custWelcome = document.getElementById("welcome-el")

// let myName = "Edward Kamande Karogo"
// let myGreeting = "Welcome Back"

// custWelcome.innerText = myGreeting + " " + myName

//console.log(custWelcome.innerText = custWelcome.innerText + " " + "😂")

//or

// console.log(custWelcome.innerText += " " + "😂")

// let saveEl = document.getElementById("save-el")
// function save(){
//     let countStr = count + "-"
//     console.log(saveEl.innerText += countStr)
//     console.log(count)
// }


//Using .textContent

let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + "-"
    console.log(saveEl.textContent += countStr + " ")
    console.log(count)
    countEl.textContent = 0
    count = 0
}



