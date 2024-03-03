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

    


}
