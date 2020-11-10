
//Todo 
window.setInterval(function(){
    let tDate = new Date()

    //Displays the day of the week
    document.getElementById("dayoftheweek").innerHTML = dayoftheweek[tDate.getDay()];

    //Displays the current time in 12 hour time
    if (tDate.getHours() > 12){
        var temphours = tDate.getHours() - 12;

        if (temphours < 10){
            document.getElementById("hour").innerHTML = "0" + (tDate.getHours() - 12);
        }else{
            document.getElementById("hour").innerHTML = tDate.getHours() - 12;
        }
    }else{       
        if (temphours < 10){
            document.getElementById("hour").innerHTML = "0" + (tDate.getHours() - 12);
        }else{
            document.getElementById("hour").innerHTML = tDate.getHours() - 12;
        }
    }

    if (tDate.getMinutes() < 10){
        document.getElementById("minute").innerHTML = "0" + tDate.getMinutes();
    }else{
        document.getElementById("minute").innerHTML = tDate.getMinutes();
    }

    document.getElementById("second").innerHTML = tDate.getSeconds();

    //Displays the month
    document.getElementById("month").innerHTML = month[tDate.getMonth()];

    //Displays the date
    document.getElementById("day").innerHTML = tDate.getDate() + ",";

    //Displays the year
    document.getElementById("year").innerHTML = tDate.getFullYear();

    //Console info
    console.log(tDate.getDay(), tDate.getHours(), tDate.getMinutes(), tDate.getSeconds())
    console.log(dayoftheweek[tDate.getDay()]);
    console.log(month[tDate.getMonth()]); 

}, 1000);





















var dayoftheweek = new Array(7);
dayoftheweek[0] = "Sunday";
dayoftheweek[1] = "Monday";
dayoftheweek[2] = "Tuesday";
dayoftheweek[3] = "Wednesday";
dayoftheweek[4] = "Thursday";
dayoftheweek[5] = "Friday";
dayoftheweek[6] = "Saturday";


var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

