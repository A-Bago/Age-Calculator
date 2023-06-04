let button = document.querySelector(".button");



function ageCalculator() {

    //geting elements fro DOM tree, so I can modify output message
    let inputYear = document.querySelector(".age-calculator__input-year");
    let inputMonth = document.querySelector(".age-calculator__input-month");
    let inputDay = document.querySelector(".age-calculator__input-day");

    // node lists, use indexing or forEach
    let warning = document.querySelectorAll(".warning");
    let label = document.querySelectorAll(".age-calculator__input-label");
    let outputResult = document.querySelectorAll(".output");




    //getting date 
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1; // month is starting from 0 that why +1
    let currentDate = date.getDate();

    //parsing input from input feilds to integer
    let birthYear = parseInt(inputYear.value);
    let birthMonth = parseInt(inputMonth.value);
    let birthDay = parseInt(inputDay.value);



    //User interface 
    function emptyInputUserInterface(birthYear, birthMonth, birthDay) {


        // modifying empty input warning messages..
        if (isNaN(birthYear) && isNaN(birthMonth) && isNaN(birthDay)) {
            warning.forEach(warning => {
                warning.innerHTML = "This field is required";
                label.forEach(label => {
                    label.style.color = "red";
                });

            })
            outputResult.forEach(outputResult => {
                outputResult.innerHTML = "--";
            })
            //Normal input, remove warnings
        } else {
            if (!isNaN(birthDay) && birthDay < 31) {
                warning[0].innerHTML = "";
                label[0].style.color = "";

            }
            if (!isNaN(birthMonth) && birthMonth <= 12) {
                warning[1].innerHTML = "";
                label[1].style.color = "";

            }
            if (!isNaN(birthYear) && birthYear <= currentYear) {
                warning[2].innerHTML = "";
                label[2].style.color = "";
            }
        }

        //  modifying out of range input warning messages..
        if (birthYear > currentYear) {
            warning[2].innerHTML = "Must be in the past"
            label[2].style.color = "red";

        } else if (birthYear < 0) {
            warning[2].innerHTML = "Can't be negative"
            label[2].style.color = "red";
        }

        if (birthMonth > 12 || birthMonth <= 0) {
            warning[1].innerHTML = "Must be a valid month";
            label[1].style.color = "red";

        }

        if (birthDay > 31 || birthDay <= 0 && isNaN(birthMonth) && isNaN(birthYear)) {
            warning[0].innerHTML = "Must be a valid day";

            label.forEach(label => {
                label.style.color = "red";
            });
        }
        if (birthDay >= 29 && birthMonth === 2) {
            warning[0].innerHTML = "Feb has 28 days";
            label[0].style.color = "red";
        }
    }



    emptyInputUserInterface(birthYear, birthMonth, birthDay)

    function ageCal() {
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function isLeap(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        console.log(isLeap(birthYear));

        if (isLeap(birthYear) === true) {
            months[1] = 29;
        }

        // Validation checks
        if (birthDay < 1 || birthDay > 31) {
            return; // Exits the function early
        }

        if (birthMonth < 1 || birthMonth > 12) {
            return; // Exits the function early
        }

        if (birthYear > currentYear) {
            return; // Exits the function early
        }

        //Check if the input values are numbers
        if (!isNaN(birthDay) && !isNaN(birthMonth) && !isNaN(birthYear)) {


            // Calculation
            if (birthDay > currentDate && (birthMonth >= currentMonth)) {
                let dayResult = (currentDate + (months[birthMonth]) - birthDay);
                let monthResult = (currentMonth + 12 - 1) - birthMonth;
                let yearResult = (currentYear - 1) - birthYear;
                console.log(`1. yearResult ${yearResult}`);
                console.log(`1. monthResult ${monthResult}`);
                console.log(`1. dayResult ${dayResult}`);
                outputResult[2].innerHTML = dayResult;
                outputResult[1].innerHTML = monthResult;
                outputResult[0].innerHTML = yearResult;

            } else if (birthDay > currentDate && birthMonth < currentMonth) {
                console.log((months[birthMonth - 1]));
                let dayResult = (currentDate + months[birthMonth - 1]) - birthDay;
                let monthResult = (currentMonth - 1) - birthMonth;
                let yearResult = currentYear - birthYear;
                console.log(`4.yearResult ${yearResult}`);
                console.log(`4.monthResult ${monthResult}`);
                console.log(`4.dayResult ${dayResult}`);
                outputResult[2].innerHTML = dayResult;
                outputResult[1].innerHTML = monthResult;
                outputResult[0].innerHTML = yearResult;
            }


            if (birthDay <= currentDate && birthMonth <= currentMonth) {
                console.log((months[birthMonth - 1]));
                let dayResult = currentDate - birthDay;
                let monthResult = currentMonth - birthMonth;
                let yearResult = currentYear - birthYear;
                console.log(`2.yearResult ${yearResult}`);
                console.log(`2.monthResult ${monthResult}`);
                console.log(`2.dayResult ${dayResult}`);
                outputResult[2].innerHTML = dayResult;
                outputResult[1].innerHTML = monthResult;
                outputResult[0].innerHTML = yearResult;

            } else if (birthDay < currentDate && (birthMonth > currentMonth)) {
                console.log((months[birthMonth]));
                let dayResult = (currentDate - birthDay);
                let monthResult = (currentMonth + 12) - birthMonth;
                let yearResult = (currentYear - 1) - birthYear;
                console.log(`3.yearResult ${yearResult}`);
                console.log(`3.monthResult ${monthResult}`);
                console.log(`3.dayResult ${dayResult}`);
                outputResult[2].innerHTML = dayResult;
                outputResult[1].innerHTML = monthResult;
                outputResult[0].innerHTML = yearResult;

            }

        }

    }


    ageCal();

}



button.addEventListener("click", ageCalculator);




