//VARIABLES////////////////////////////////////////////////////////////////////////////

//current date and time
var datetime = null;
        date = null;
//local storage and button variables
buttonEl = document.getElementById("saveInput");

//FUNCTIONS//////////////////////////////////////////////////////////////////////////

//function to show current date and time for the jumbotron at the top of the app
var update = function () {

    // get current date
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    
    // update text if time
    hourlyColorChange();
};

//function to save the input to local storage when the button SAVE is pushed

function saveToLocalStorage (elementId) {
    return function() {
        console.log("Saving to local storage.");
        var inputValue = document.getElementById(elementId);
        localStorage.setItem(elementId, inputValue.value);
    }
}
    
//function to change the colors of the events as the hours pass--gray for hours past, green for current and hours to come//
function hourlyColorChange () {

    var calendarHourId;
    var calendarHour;
    var currentCalendarHourMomentDate;
    var inputBoxToColor;
    var scheduleIDList = [
        {
            hour: "eightam",
            input: "inputValue8"
        },
        {
            hour: "nineam",
            input: "inputValue9"
        },
        {
            hour: "tenam",
            input: "inputValue10"
        },
        {
            hour: "elevenam",
            input: "inputValue11"
        },
        {
            hour: "twelvepm",
            input: "inputValue12"
        },
        {
            hour: "onepm",
            input: "inputValue1"
        },
        {
            hour: "twopm",
            input: "inputValue2"
        },
        {
            hour: "threepm",
            input: "inputValue3"
        },
        {
            hour: "fourpm",
            input: "inputValue4"
        },
        {
            hour: "fivepm",
            input: "inputValue5"
        }
    ]

    for (let i = 0; i < scheduleIDList.length; i++) {
        calendarHourId = scheduleIDList[i].hour;
        calendarHour = document.getElementById(calendarHourId);
        currentCalendarHourMomentDate=moment(new Date().setHours(calendarHour.innerText.split(":")[0]));
        currentCalendarHourMomentDate.format('dddd, MMMM Do YYYY, h:mm:ss a');
        console.log(currentCalendarHourMomentDate);
        inputBoxToColor = document.getElementById(scheduleIDList[i].input);

        if (currentCalendarHourMomentDate === date) {
            inputBoxToColor.setAttribute("style", "background-color: red");
        } else if (currentCalendarHourMomentDate < date) {
            inputBoxToColor.setAttribute("style", "background-color: grey");
        } else {
            inputBoxToColor.setAttribute("style", "background-color: green");
        }
    }
}

$(document).ready(function(){

    // setup current date object
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);

    // adding eventlisteners to save buttons
    document.getElementById("save-8").addEventListener("click", saveToLocalStorage("inputValue8"));
    document.getElementById("save-9").addEventListener("click", saveToLocalStorage("inputValue9"));
    document.getElementById("save-10").addEventListener("click", saveToLocalStorage("inputValue10"));
    document.getElementById("save-11").addEventListener("click", saveToLocalStorage("inputValue11"));
    document.getElementById("save-12").addEventListener("click", saveToLocalStorage("inputValue12"));
    document.getElementById("save-1").addEventListener("click", saveToLocalStorage("inputValue1"));
    document.getElementById("save-2").addEventListener("click", saveToLocalStorage("inputValue2"));
    document.getElementById("save-3").addEventListener("click", saveToLocalStorage("inputValue3"));
    document.getElementById("save-4").addEventListener("click", saveToLocalStorage("inputValue4"));
    document.getElementById("save-5").addEventListener("click", saveToLocalStorage("inputValue5"));
});


