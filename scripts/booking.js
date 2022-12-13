/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day = 40;
var number_of_days = 0;
let total_cost = 0;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const clearButton = document.getElementById("clearButton");
const half = document.getElementById("half");
const full = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectMonday() // Function for Monday
{   
    if (monday.classList.contains("clicked"))
        {
            monday.classList.remove("clicked");
            number_of_days -= 1;
            calculate();
        }
    else
        {
            monday.classList.add("clicked");
            number_of_days += 1;
            calculate();
        }
}

function selectTuesday() // Function for Tuesday
{   
    if (tuesday.classList.contains("clicked"))
        {
            tuesday.classList.remove("clicked");
            number_of_days -= 1;
            calculate();
        }
    else
        {
            tuesday.classList.add("clicked");
            number_of_days += 1;
            calculate();
        }

}

function selectWednesday() // Function for Wednesday
{   
    if (wednesday.classList.contains("clicked"))
        {
           wednesday.classList.remove("clicked");
            number_of_days -= 1;
            calculate();
        }
    else
        {
            wednesday.classList.add("clicked");
            number_of_days += 1;
            calculate();
        }
}

function selectThursday() // Function for Thursday
{   
    if (thursday.classList.contains("clicked"))
        {
            thursday.classList.remove("clicked");
            number_of_days -= 1;
            calculate();
        }
    else
        {
            thursday.classList.add("clicked");
            number_of_days += 1;
            calculate();
        }
}

function selectFriday() // Function for Friday
{   
    if (friday.classList.contains("clicked"))
        {
            friday.classList.remove("clicked");
            number_of_days -= 1;
            calculate();
        }
    else
        {
            friday.classList.add("clicked");
            number_of_days += 1;
            calculate();
        }
}

/* Create event listeners for each button to call their respective function */ 
monday.addEventListener("click", selectMonday);
tuesday.addEventListener("click", selectTuesday);
wednesday.addEventListener("click", selectWednesday);
thursday.addEventListener("click", selectThursday);
friday.addEventListener("click", selectFriday);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays()
{
    document.getElementById("monday").classList.remove("clicked");
    document.getElementById("tuesday").classList.remove("clicked");
    document.getElementById("wednesday").classList.remove("clicked");
    document.getElementById("thursday").classList.remove("clicked");
    document.getElementById("friday").classList.remove("clicked");
    number_of_days = 0;
    calculate();
}

clearButton.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDay()
{
    cost_per_day = 20;
    document.getElementById("half").classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    calculate();
}

half.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDay()
{
    cost_per_day = 40;
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    calculate();
}

full.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate()
{
    total_cost = cost_per_day * number_of_days;
    document.getElementById("calculated-cost").innerHTML = total_cost;
}