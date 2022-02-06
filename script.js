//Putting the date in the jumbotron
$("#currentDay").text(moment().format("MMM Do YY"));

//DOM element that is going to be manipulated and saved to local storage
let colorBar = $('textarea');
timeTeller();

function timeTeller() {
    //grabbing the current hour and saving it into a variable
    let currentHour = moment().hour();
    //console.log(currentHour);
    /*writing a function for each text area to grab its id and convert 
    it to a number so that I can compare it to the current hour*/
    $(colorBar).each(function () {
        //grabbing the id of each text area and parsing it to compare to current hour
        let workDayHour = parseInt($(this).attr("id"));
        //console.log("Work day hour: " + workDayHour);
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

//setting up the local storage
$(".saveBtn").on('click', function () {
    //console.log(this);
    //grabs the text from sibling element with the class of description
    var text = $(this).siblings(".description").val();
    //console.log(text)
    /*grabs the id of parent element so that it can be the name of the text area value when saved to local storage*/
    var hourText = $(this).parent().attr("id");
    //console.log(hourText)
    //set items in local storage.
    localStorage.setItem(hourText, text);
})

//grabbing descriptions that were placed in local storage for each row
$("#nineAmRow .description").val(localStorage.getItem("nineAmRow"));
$("#tenAmRow .description").val(localStorage.getItem("tenAmRow"));
$("#elevenAmRow .description").val(localStorage.getItem("elevenAmRow"));
$("#twelvePmRow .description").val(localStorage.getItem("twelvePmRow"));
$("#onePmRow .description").val(localStorage.getItem("onePmRow"));
$("#twoPmRow .description").val(localStorage.getItem("twoPmRow"));
$("#threePmRow .description").val(localStorage.getItem("threePmRow"));
$("#fourPmRow .description").val(localStorage.getItem("fourPmRow"));
$("#fivePmRow .description").val(localStorage.getItem("fivePmRow"));

