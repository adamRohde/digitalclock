
var myCyclicTask;
var currenttime = new Date();


function runTask() {

    console.log("task 1");

    updateTime();

    myCyclicTask = setTimeout(runTask, 1000);

}

function updateTime(t) {

   
    console.log(currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds());

    document.getElementById("hour").innerHTML = currenttime.getHours();

    document.getElementById("minute").innerHTML = currenttime.getMinutes();

    document.getElementById("second").innerHTML = currenttime.getSeconds();

}


runTask();







