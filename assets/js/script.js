//Function for time/date format and functions for local storage time blocks.
$(document).ready(function(){
    $("#timeDay").text(moment().format("Do of MMMM, YYYY"))

    nineAM()
    tenAM()
    elevenAM()
    twelveAM()
    thirteenAM()
    fourteenAM()
    fifteenAM()
    sixteenAM()
    seventeenAM()

//Set and Pull for Local Storage saving buttons per time block
timeNow();
});

$(".9AM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#9`).val();
    localStorage.setItem("9AM", plans)
})

$(".10AM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#10`).val();
    localStorage.setItem("10AM", plans)
})

$(".11AM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#11`).val();
    localStorage.setItem("11AM", plans)
})

$(".12PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#12`).val();
    localStorage.setItem("12PM", plans)
})

$(".1PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#13`).val();
    localStorage.setItem("1PM", plans)
})

$(".2PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#14`).val();
    localStorage.setItem("2PM", plans)
})

$(".3PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#15`).val();
    localStorage.setItem("3PM", plans)
})

$(".4PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#16`).val();
    localStorage.setItem("4PM", plans)
})

$(".5PM").on("click", function(event){
    event.preventDefault()

    var plans = $(`#17`).val();
    localStorage.setItem("5PM", plans)
})


function nineAM(){
    var storedData = localStorage.getItem("9AM")
    $("#9").val(storedData)
}

function tenAM(){
    var storedData = localStorage.getItem("10AM")
    $("#10").val(storedData)
}

function elevenAM(){
    var storedData = localStorage.getItem("11AM")
    $("#11").val(storedData)
}

function twelveAM(){
    var storedData = localStorage.getItem("12PM")
    $("#12").val(storedData)
}

function thirteenAM(){
    var storedData = localStorage.getItem("1PM")
    $("#13").val(storedData)
}

function fourteenAM(){
    var storedData = localStorage.getItem("2PM")
    $("#14").val(storedData)
}

function fifteenAM(){
    var storedData = localStorage.getItem("3PM")
    $("#15").val(storedData)
}

function sixteenAM(){
    var storedData = localStorage.getItem("4PM")
    $("#16").val(storedData)
}

function seventeenAM(){
    var storedData = localStorage.getItem("5PM")
    $("#17").val(storedData)
}

function timeNow(){
    let presentHour = parseInt(moment().format("H"));

    $("textarea").each(function() {
        let presentId = parseInt($(this).attr("id"));
        if(presentId > presentHour) {
            $(this).addClass("future");
        } else if (presentId === presentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
}

