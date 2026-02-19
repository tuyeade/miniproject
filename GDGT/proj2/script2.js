function startTest() {

    let score = 0;
    let sleepHours = prompt("How many hours do you sleep per day?");
    if (sleepHours === null) {
        alert("Test cancelled.");
        return;
    }
    sleepHours = parseInt(sleepHours);
    while (isNaN(sleepHours) || sleepHours < 0) {
        sleepHours = parseInt(prompt("Invalid input! Please enter a valid number of hours:"));
    }
    if (sleepHours >= 4) {
        score += 1;
    }
    let likesMusic = prompt("Do you enjoy music? (yes / no)");

    if (likesMusic === null) {
        alert("Test cancelled.");
        return;
    }
    likesMusic = likesMusic.toLowerCase().trim();

    while (likesMusic !== "yes" && likesMusic !== "no") {
        likesMusic = prompt("Please answer only 'yes' or 'no':").toLowerCase().trim();
    }

    if (likesMusic === "yes") {
        score += 1;
    }
    let getsTired = prompt("Do you get tired? (yes / no)");

    if (getsTired === null) {
        alert("Test cancelled.");
        return;
    }
    getsTired = getsTired.toLowerCase().trim();

    while (getsTired !== "yes" && getsTired !== "no") {
        getsTired = prompt("Please answer only 'yes' or 'no':").toLowerCase().trim();
    }
    if (getsTired === "yes") {
        score += 1;
    }
    let getsAngry = prompt("Do you get angry? (yes / no)");

    if (getsAngry === null) {
        alert("Test cancelled.");
        return;
    }

    getsAngry = getsAngry.toLowerCase().trim();

    while (getsAngry !== "yes" && getsAngry !== "no") {
        getsAngry = prompt("Please answer only 'yes' or 'no':").toLowerCase().trim();
    }

    if (getsAngry === "yes") {
        score += 1;
    }
    let mathAnswer = prompt("What is 5 + 3?");
    if (mathAnswer === null) {
        alert("Test cancelled.");
        return;
    }

    mathAnswer = parseInt(mathAnswer);

    while (isNaN(mathAnswer)) {
        mathAnswer = parseInt(prompt("Invalid input! Please enter a number:"));
    }

    if (mathAnswer === 8) {
        score += 1;
    }

    if (score >= 4) {
        alert("You are definitely human!");
    } 
    else if (score >= 2) {
        alert("Half human, half robot!");
    } 
    else {
        alert("Robot detected!");
    }

    console.log("Final Score:", score);
}
