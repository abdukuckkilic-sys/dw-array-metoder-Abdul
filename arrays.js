document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder ---

    // opgave 1
    let newNumbers = numbersArray.filter(number => number > 20);

    console.log("opgave 1", newNumbers)

    // opgave 2
    catsArray.push("sniffles");

    console.log("opgave 2", catsArray)
}) // ends DOMContentLoaded