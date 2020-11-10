
window.setInterval(function(){
    var tDate = new Date()

    console.log(tDate.getDay(), tDate.getHours(), tDate.getMinutes(), tDate.getSeconds())

    if (tDate.getHours() > 12){
        document.getElementById("hour").innerHTML = tDate.getHours() - 12;
    }else{
        document.getElementById("hour").innerHTML = tDate.getHours();
    }

    document.getElementById("minute").innerHTML = tDate.getMinutes();

    document.getElementById("second").innerHTML = tDate.getSeconds();

}, 1000);




