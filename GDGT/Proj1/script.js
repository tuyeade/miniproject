function checkBudget() {

    let budget = prompt("Enter your budget amount in birr:");
    if (budget === null) {
        alert("Operation cancelled.");
        return;
    }

    budget = parseFloat(budget);

    while (isNaN(budget) || budget < 0) {
        budget = parseFloat(prompt("Invalid input! Please enter a valid budget amount:"));
    }

    let price = prompt("Enter the item price in birr:");

    if (price === null) {
        alert("Operation cancelled.");
        return;
    }

    price = parseFloat(price);

    while (isNaN(price) || price < 0) {
        price = parseFloat(prompt("Invalid input! Please enter a valid item price:"));
    }

    let savings = prompt("Enter your savings (optional, press OK for 0):");

    if (savings === null || savings.trim() === "") {
        savings = 0;
    } else {
        savings = parseFloat(savings);

        while (isNaN(savings) || savings < 0) {
            savings = parseFloat(prompt("Invalid input! Please enter a valid savings amount:"));
        }
    }

    let totalMoney = budget + savings;

    if (totalMoney >= price) {
        alert("You can afford this item! Go ahead and buy it.");
    } else {
        let difference = price - totalMoney;
        alert("You cannot afford this item.\nYou need " + difference.toFixed(2) + " more birr to afford.");
    }

    console.log("Budget:", budget);
    console.log("Savings:", savings);
    console.log("Total Money:", totalMoney);
    console.log("Item Price:", price);
}


