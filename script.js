
// I want to save to local Storage
// alert message: "I just saved to local storage"

//Putting the date in the jumbotron
$("#currentDay").text(moment().format("MMM Do YY"));


//grabbing the DOM elements that are going to be interacted with by the user
let nineButton = document.querySelector('.nineAmButton');
let tenButton = document.querySelector('.tenAmButton');
let elevenButton = document.querySelector('.elevenAmButton');
let twelveButton = document.querySelector('.twelvePmButton');
let oneButton = document.querySelector('.onePmButton');
let twoButton = document.querySelector('.twoPmButton');
let threeButton = document.querySelector('.threePmButton');
let fourButton = document.querySelector('.fourPmButton');
let fiveButton = document.querySelector('.fivePmButton');

//DOM element that is going to be manipulated and saved to local storage
let colorBar = document.getElementsByTagName('textarea');
timeTeller();

function timeTeller() {
    //grabbing the current hour and saving it into a variable
    let currentHour = moment().hour();
    console.log(currentHour);
    //writing a function for each text area to grab its id and convert 
    //it to a number so that I can compare it to the current hour
    $(colorBar).each(function () {
        //grabbing the id of each text area and parsing it to compare to current hour
        let workDayHour = parseInt($(this).attr("id"));
        console.log("Work day hour: " + workDayHour);
        //conditions for making the background of each textarea specific colors
        if (currentHour > workDayHour) {
            $(this).addClass("past");
            //console.log("This time is in the past");
        } else if (currentHour < workDayHour) {
            $(this).addClass("future");
            //console.log("This time is in the future");
        } else {
            $(this).addClass("present");
            //console.log("This time is currently in the present");
        }
    })
}    
   
