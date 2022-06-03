// var tasks = [];
// // create a "clock" to track time for past, present and future appointments
// // debugger;
var time = document.getElementsByClassName(".time");

console.log(time);

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
setInterval(dateTimeDisplay, 60000);
        console.log("tick");


// createTasks function

// saveTasks function

// loadTasks function

// editTasks function

dateTimeDisplay();
// loadTasks ();
setInterval(function() {
    $("").each(function() {
      dateTimeDisplay($(this));
    });
  }, (1000 * 60));
