//VARIABLES////////////////////////////////////////////////////////////////////////////

//current date and time
var datetime = null;
        date = null;
//local storage and button variables
buttonEl = document.getElementById("saveInput");
//FUNCTIONS//////////////////////////////////////////////////////////////////////////

//function to show current date and time for the jumbotron at the top of the app
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));

    var scheduleIDList = ["eightam", "nineam", "tenam", "elevenam", "twelvepm", "onepm", "twopm", "threepm", "fourpm", "fivepm"]     ]

};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

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

}

//EVENT LISTENERS AND LOGIC///////////////////////////////////////////////////////////////////
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

