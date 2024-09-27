let sec=document.getElementById("sh");
let hor=document.getElementById("hh");
let min=document.getElementById("mh");

function clock(){
    let time=new Date();
    let ss=time.getSeconds();
    let mm=time.getMinutes();
    let hh=time.getHours();
    let h=hh;
    let m=mm;
   
    if(m<10){
        m="0"+mm;
    }
    if(hh>=13){
        h=hh-12;
    }
    
    if(hh==0){
        h=12;
    }
    
    document.getElementById("time").textContent=`${h}:${m}`;

    
    hh=hh*30 + mm/2;
    mm=6*mm;
    ss=6*ss;
    sec.style.transform=`rotate(${ss}deg)`;
    hor.style.transform=`rotate(${hh}deg)`;
    min.style.transform=`rotate(${mm}deg)`;
    setTimeout(clock,1000);
}
clock();