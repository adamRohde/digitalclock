const dayoftheweek = new Array(7);
dayoftheweek[0] = "Sunday";
dayoftheweek[1] = "Monday";
dayoftheweek[2] = "Tuesday";
dayoftheweek[3] = "Wednesday";
dayoftheweek[4] = "Thursday";
dayoftheweek[5] = "Friday";
dayoftheweek[6] = "Saturday";

const month = new Array(12);
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

function renderClock() {
    let theDate = new Date();

    //Displays the day of the week
    document.getElementById("dayoftheweek").textContent = dayoftheweek[theDate.getDay()];

    const isCivilianTime = document.getElementById("12-hour-clock").checked;

    const hours = theDate.getHours();

    if (isCivilianTime) {
        const civilianHours = hours > 12 ? hours - 12 : hours;
        document.getElementById("hour").textContent = civilianHours;
    } else {
        document.getElementById("hour").textContent = hours;
    }

    document.getElementById("minute").textContent = addLeadingZero(theDate.getMinutes());

    document.getElementById("second").textContent = addLeadingZero(theDate.getSeconds());

    document.getElementById("month").textContent = month[theDate.getMonth()] + ",";
    document.getElementById("day").textContent = theDate.getDate() + ",";
    document.getElementById("year").textContent = theDate.getFullYear();
}

function addLeadingZero(time) {
    return time < 10 ? "0" + time : time;
}

renderClock();
window.setInterval(renderClock, 1000);
