const sqmInput = document.getElementById("sqm");
const floorInput = document.getElementById("floor");
const atesInput = document.getElementById("ates");

const hoursDisplay = document.getElementById("hours");
const totalDisplay = document.getElementById("total");

// Base calculation from sqm
function getBasePriceAndHours(sqm) {
    let hours = 0;
    let price = 0;

    if (sqm >= 20 && sqm <= 30) { hours = 2; price = 588; }
    else if (sqm >= 31 && sqm <= 40) { hours = 4; price = 988; }
    else if (sqm >= 41 && sqm <= 60) { hours = 6; price = 1388; }
    else if (sqm >= 61 && sqm <= 80) { hours = 8; price = 1788; }

    return { hours, price };
}

// Full calculation with floors & ates
function calculate() {
    const sqm = Number(sqmInput.value);
    const floors = Number(floorInput.value) || 1;
    const ates = Number(atesInput.value) || 1;

    const base = getBasePriceAndHours(sqm);

    const totalHours = base.hours * floors;
    const totalPrice = base.price * floors * ates;

    hoursDisplay.textContent = totalHours;
    totalDisplay.textContent = totalPrice;
}

// Listen to all inputs
[sqmInput, floorInput, atesInput].forEach(input => {
    input.addEventListener("input", calculate);
});

// Initial calculation
calculate();
