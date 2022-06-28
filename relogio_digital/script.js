function clock(){
    let data = new Date();
    let hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds()

    if(hor<10){
        hor='0'+hor
    }
    if(min<10){
        min='0'+min
    }
    if(seg<10){
        seg='0'+seg
    }

    let horas=hor+":"+min+":"+seg;

    document.getElementById('rel').value=horas;
}

let tempo=setInterval(clock,1000);