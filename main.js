function showtime(){
    // get element htm
    var myClock = document.getElementById("my-clock");

    // create data method
    var date = new Date();
    var hours = date.getHours();
    var minuts = date.getMinutes();
    var secounds = date.getSeconds();
    var session = "AM"

    // set night time
    if(hours == 12){
        hours = 0;
    }

    // set PM time
    if(hours > 12){
        hours = hours-12
        secounds = "PM"
    }

    // set time when less than 10
    hours = hours < 10 ? "0" + hours : hours ;
    minuts = minuts < 10 ? "0" + minuts : minuts ;
    secounds = secounds <10 ? "0" + secounds : secounds ;


}
