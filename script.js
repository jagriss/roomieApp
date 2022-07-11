
window.addEventListener("load", function () {

    let calculate = document.getElementById("calculate");
    calculate.addEventListener("click", function (event) {

        event.preventDefault();

        let totalRent = document.querySelector("input[name=rent]").value;
        let numRoommates = document.querySelector("input[name=rmNum]").value;
        let electric = document.querySelector("input[name=inputElect]").value;
        let water = document.querySelector("input[name=inputWater]").value;
        let gas = document.querySelector("input[name=inputGas]").value;
        let wifi = document.querySelector("input[name=inputWifi]").value;
        let misc = document.querySelector("input[name=inputMisc]").value;

        let utility = costOfUtilities(electric, water, gas, wifi, misc);


        costOfLivingPerPerson(document, totalRent, numRoommates, utility);
    });


});
