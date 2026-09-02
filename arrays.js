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

    // opgave 3
    let containsTrixie = dogsArray.some(function (dog) {
        return dog == "Trixie"
    }
    )
    console.log("opgave 3a", containsTrixie);

    let containsBaxter = dogsArray.some(function (dog) {
        return dog == "Baxter"
    })
    console.log("opgave 3b", containsBaxter);

    // opgave 4
    console.log("Opgave 4a", catsArray.find(cat => cat === "Bagheera"));

    console.log("Opgave 4b", catsArray.find(cat => cat === "Salem"));

    // opgave 5
    et numbersTimesThree = numbersArray.map(number => number * 3);

    console.log("Opgave 5", numbersTimesThree);

    // opgave 6
    console.log("Opgave 6", dogsArray.join(""));


}) // ends DOMContentLoaded