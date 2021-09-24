//The Below function shows the current date on the screen.//
$(document).ready(function(){
    $("#timeDay").text(moment().format("Do of MMMM, YYYY"))

//Set and Pull for Local Storage saving buttons per time block//
    pullTime()
    $(".saveBtn").on("click", function(event){
        event.preventDefault()

        var timePull = $(`#9`).val();
        localStorage.setItem("timePull1", timePull)
        pullTime()
    })

    function pullTime(){
        var storedData = localStorage.getItem("timePull1")
        $("#9").val(storedData)
    }

    pullTimeOne()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $(`#10`).val()
        var key = timePull.value;
        localStorage.setItem("timePullOne" , key)
        pullTimeOne()
    })

    function pullTimeOne(){
        var storedData = localStorage.getItem("timePullOne")
        $("#10").val(storedData)
    }

    pullTimeTwo()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#11").val()
        localStorage.setItem("timePull2", timePull)
        pullTimeTwo()
    })
    function pullTimeTwo(){
        var storedData = localStorage.getItem("timePull2")
        $("#11").val(storedData)
    }


    pullTimeThree()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#12").val()
        localStorage.setItem("timePull3", timePull)
        pullTimeThree()
    })
    function pullTimeThree(){
        var storedData = localStorage.getItem("timePull3")
        $("#12").val(storedData)
    }

    pullTimeFour()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#12").val()
        localStorage.setItem("timePull4", timePull)
        pullTimeFour()
    })
    function pullTimeFour(){
        var storedData = localStorage.getItem("timePull4")
        $("#13").val(storedData)
    }

    pullTimeFive()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#12").val()
        localStorage.setItem("timePull5", timePull)
        pullTimeFive()
    })
    function pullTimeFive(){
        var storedData = localStorage.getItem("timePull5")
        $("#14").val(storedData)
    }

    pullTimeSix()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#12").val()
        localStorage.setItem("timePull6", timePull)
        pullTimeSix()
    })
    function pullTimeSix(){
        var storedData = localStorage.getItem("timePull6")
        $("#15").val(storedData)
    }

    pullTimeSeven()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull = $("#12").val()
        localStorage.setItem("timePull7", timePull)
        pullTimeSeven()
    })
    function pullTimeSeven(){
        var storedData = localStorage.getItem("timePull7")
        $("#16").val(storedData)
    }

    pullTimeEight()
    $("saveBtn").on("click", function(event){
        event.preventDefault()
        
        var timePull= $("#12").val()
        localStorage.setItem("timePull8", timePull)
        pullTimeEight()
    })
    function pullTimeEight(){
        var storedData = localStorage.getItem("timePull8")
        $("#17").val(storedData)
    }
//Sets which is signified as a time
var timeBlocks = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


timeNow();
});

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

