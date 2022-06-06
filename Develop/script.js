var time = document.getElementsByClassName(".time");

var saveBtn9 = document.getElementById("saveBtn9");
var saveBtn10 = document.getElementById("saveBtn10");
var saveBtn11 = document.getElementById("saveBtn11");
var saveBtn12 = document.getElementById("saveBtn12");
var saveBtn13 = document.getElementById("saveBtn13");
var saveBtn14 = document.getElementById("saveBtn14");
var saveBtn15 = document.getElementById("saveBtn15");
var saveBtn16 = document.getElementById("saveBtn16");
var saveBtn17 = document.getElementById("saveBtn17");

var hour9 = document.getElementById("9");
var hour10 = document.getElementById("10");
var hour11 = document.getElementById("11");
var hour12 = document.getElementById("12");
var hour13 = document.getElementById("13");
var hour14 = document.getElementById("14");
var hour15 = document.getElementById("15");
var hour16 = document.getElementById("16");
var hour17 = document.getElementById("17");

setInterval(dateTimeDisplay, 60000);
    
// current time to display in jumbotron
var dateTimeDisplay = function(){
    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = moment().format("dddd, MMMM Do");
    // console.log(currentDay);
    
    // add background color to hours depending on past, present and future
        var now = moment().hour();       
        var oneHourFuture = now + 1;       
        var oneHourPast = now - 1;
        
        $(".time").each(function(){

            if (this.id >= oneHourFuture) {
                $(this).addClass("future");
            
            } else if (this.id <= oneHourPast) {
                $(this).addClass("past");

            } else if (this.id == now) {
                $(this).addClass("present")
            }
        });        
};

// loadTasks function
var loadTasks = function() {

    tasks9 = JSON.parse(localStorage.getItem("nineTasks"));
    document.getElementById("9").innerHTML = tasks9;

    tasks10 = JSON.parse(localStorage.getItem("tenTasks"));
    document.getElementById("10").innerHTML = tasks10;
   
    tasks11 = JSON.parse(localStorage.getItem("elevenTasks"));
    document.getElementById("11").innerHTML = tasks11;

    tasks12 = JSON.parse(localStorage.getItem("twelveTasks"));
    document.getElementById("12").innerHTML = tasks12;

    tasks13 = JSON.parse(localStorage.getItem("oneTasks"));
    document.getElementById("13").innerHTML = tasks13;

    tasks14 = JSON.parse(localStorage.getItem("twoTasks"));
    document.getElementById("14").innerHTML = tasks14;

    tasks15 = JSON.parse(localStorage.getItem("threeTasks"));
    document.getElementById("15").innerHTML = tasks15;

    tasks16 = JSON.parse(localStorage.getItem("fourTasks"));
    document.getElementById("16").innerHTML = tasks16;

    tasks17 = JSON.parse(localStorage.getItem("fiveTasks"));
    document.getElementById("17").innerHTML = tasks17;
}

// save tasks functions
$(saveBtn9).on("click", function(){
    console.log("click");
    localStorage.setItem("nineTasks", JSON.stringify(hour9.value));
});
    
$(saveBtn10).on("click", function(){
    console.log("click");
    localStorage.setItem("tenTasks", JSON.stringify(hour10.value));
});

$(saveBtn11).on("click", function(){
    console.log("click");
    localStorage.setItem("elevenTasks", JSON.stringify(hour11.value));
});

$(saveBtn12).on("click", function(){
    console.log("click");
    localStorage.setItem("twelveTasks", JSON.stringify(hour12.value));
});

$(saveBtn13).on("click", function(){
    console.log("click");
    localStorage.setItem("oneTasks", JSON.stringify(hour13.value));
});

$(saveBtn14).on("click", function(){
    console.log("click");
    localStorage.setItem("twoTasks", JSON.stringify(hour14.value));
});

$(saveBtn15).on("click", function(){
    console.log("click");
    localStorage.setItem("threeTasks", JSON.stringify(hour15.value));
});

$(saveBtn16).on("click", function(){
    console.log("click");
    localStorage.setItem("fourTasks", JSON.stringify(hour16.value));
});

$(saveBtn17).on("click", function(){
    console.log("click");
    localStorage.setItem("fiveTasks", JSON.stringify(hour17.value));
});

dateTimeDisplay();
loadTasks();