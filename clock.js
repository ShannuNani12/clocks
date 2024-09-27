function clock(){
    var allInput=document.querySelectorAll("h1");
    var date=new Date();
    var hh=date.getHours();
    if(hh<12){
        allInput[1].innerHTML="AM";
    }
    else{
        allInput[1].innerHTML="PM";
    }
    if(hh<10){
        hh="0"+hh;
    }
    if(hh>=13){
        hh=hh-12
    }
    if(hh==0){
        hh=12;
    }
    var m=date.getMinutes();
    if(m<10){
        m="0"+m;
    }
    var ss=date.getSeconds();
    if(ss<10){
        ss="0"+ss;
    }
    var dd=date.getDate();
    var mm=date.getMonth();
    var yy=date.getFullYear();
    var da=date.getDay();
    let time=`${hh}:${m}`
    allInput[0].innerHTML=time;
    allInput[2].innerHTML=`${ss}`;
    let mon=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
       mm=mon[mm];
       allInput[3].innerHTML=`${dd}-${mm}-${yy}`;

       let bg=["sun","mon","tue","wed","thus","fri","sat"]
       document.getElementById("main").style.backgroundImage=`url("./asserts/${bg[da]}.jpg")`;
     let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     da=day[da];
     allInput[4].innerHTML=da;
    
     
    
       
setTimeout(clock,1000);
}
clock();