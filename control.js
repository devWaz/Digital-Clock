document.body.style.backgroundColor = "black"
document.body.style.color = "white"




function showTime(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var session = 'AM';

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h -12;
        session = 'PM';
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    var time = h + ':' + m + ':' + s + ' ' + session;
    document.getElementById("time").innerText = time;

}


setInterval(showTime , 1000);