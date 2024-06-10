function costOfUtilities(electric, water, gas, wifi, misc) {
    let costOfUtil = 0;
    let electricNum = parseFloat(electric);
    let waterNum = parseFloat(water);
    let gasNum = parseFloat(gas);
    let wifiNum = parseFloat(wifi);
    let miscNum = parseFloat(misc);

    if (electricNum > 0) {
        costOfUtil += electricNum;
    }
    if (waterNum > 0) {
        costOfUtil += waterNum;
    }
    if (gasNum > 0) {
        costOfUtil += gasNum;
    }
    if (wifiNum > 0) {
        costOfUtil += wifiNum;
    }
    if (miscNum > 0) {
        costOfUtil += miscNum;
    }

    return costOfUtil;
}

function costOfLivingPerPerson(totalRent, numRoommates, utility) {
    let totalMnthlyRent = parseFloat(totalRent);
    let numOfRoommates = parseFloat(numRoommates);
    let utilityBill = parseFloat(utility);

    let totalExpenses = totalMnthlyRent + utilityBill;
    let totalPerPerson = totalExpenses / numOfRoommates;

    document.getElementById("totalCost").innerHTML = `$${totalExpenses.toFixed(2)}`;
    document.getElementById("totalCostPerPerson").innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

// function costOfUtilities(electric, water, gas, wifi, misc) {
//     let costOfUtil = 0;
//     let electricNum = parseFloat(electric);
//     let waterNum = parseFloat(water);
//     let gasNum = parseFloat(gas);
//     let wifiNum = parseFloat(wifi);
//     let miscNum = parseFloat(misc);

//         if (electricNum > 0) {
//             costOfUtil += electricNum;
//         } 
//         if (waterNum > 0) {
//             costOfUtil += waterNum;
//         } 
//         if (gasNum > 0) {
//             costOfUtil += gasNum;
//         } 
//         if (wifiNum > 0) {
//             costOfUtil += wifiNum
//         } 
//         if (miscNum > 0) {
//             costOfUtil += miscNum;
//         } 

//     return costOfUtil;
// }

// function costOfLivingPerPerson(document, totalRent, numRoommates, utility) {

//     let totalMnthlyRent = parseFloat(totalRent);
//     let numOfRoommates = parseFloat(numRoommates);
//     let utilityBill = costOfUtilities(utility);

//     let totalExpenses = (totalMnthlyRent) + (utilityBill);

//     let totalPerPerson = (totalExpenses) / (numOfRoommates);

// return totalCost.innerHTML = `$${totalExpenses}`,
//     totalCostPerPerson.innerHTML = `$${totalPerPerson}`;
// }

