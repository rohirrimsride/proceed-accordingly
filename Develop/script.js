
var tasks = [];

var time = document.getElementsByClassName(".time");
var hourlyTasks = document.getElementById("9");

// console.log(time);

setInterval(dateTimeDisplay, 60000);
    
// current time to display in jumbotron
var dateTimeDisplay = function(){
    var currentDay = document.getElementById("currentDay");
    currentDay.textContent = moment().format("dddd, MMMM Do");
    // console.log(currentDay);
    
    // add background color to hours depending on past, present and future
        var now = moment().hour();
        // console.log(now);
        
        var oneHourFuture = now + 1;
        // console.log(oneHourFuture);
        
        var oneHourPast = now - 1;
        // console.log(oneHourPast);
        
        $(".time").each(function(){
            
            // console.log(this.id);

            if (this.id >= oneHourFuture) {
                // console.log(true);
                $(this).addClass("future");
            
            } else if (this.id <= oneHourPast) {
                // console.log(true);
                $(this).addClass("past");

            } else if (this.id == now) {
                // console.log(true);
                $(this).addClass("present")
            }
        });        
};

// saveTasks function
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// loadTasks function
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

$(".saveBtn").on("click", function(){
    console.log("click");
    $().each(function(){
        tasks.push({
            text:$(this)
                .find("textarea")
                .val()
                .trim(),    
    });
    console.log(tasks);
        saveTasks(tasks);
    });

});

dateTimeDisplay();
loadTasks();