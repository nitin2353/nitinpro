
setInterval(hours,100)
 
function hours(){
    const d = new Date();
    let hours = d.getHours();

    if(hours == 0){
        document.querySelector('.hour1 .s6').style="display:none"
        document.querySelector('.hour2 .s6').style="display:none"
        document.querySelector('.hour1 .s2').style="display:block"
        document.querySelector('.hour1 .s3').style="display:block"
        document.querySelector('.hour1 .s4').style="display:block"
        document.querySelector('.hour1 .s5').style="display:block"
        document.querySelector('.hour1 .s6').style="display:block"
        document.querySelector('.hour1 .s7').style="display:block"
}
else if(hours == 1 || hours == 13){

    document.querySelector('.hour1 .s1').style="display:none"
    document.querySelector('.hour1 .s3').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour1 .s6').style="display:none"
    document.querySelector('.hour1 .s7').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s2').style="display:block"
}
else if(hours == 2 || hours == 14){
     document.querySelector('.hour1 .s1').style="display:none"
     document.querySelector('.hour1 .s4').style="display:none"
     document.querySelector('.hour2 .s6').style="display:none"
     document.querySelector('.hour1 .s2').style="display:block"
     document.querySelector('.hour1 .s3').style="display:block"
     document.querySelector('.hour1 .s5').style="display:block"
     document.querySelector('.hour1 .s7').style="display:block"
     document.querySelector('.hour1 .s6').style="display:block"


}
else if(hours == 3 || hours == 15){
    document.querySelector('.hour1 .s1').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s7').style="display:block"
     document.querySelector('.hour1 .s2').style="display:block"
     document.querySelector('.hour1 .s3').style="display:block"
     document.querySelector('.hour1 .s4').style="display:block"
     document.querySelector('.hour1 .s6').style="display:block"
}
else if(hours == 4 || hours == 16){
    document.querySelector('.hour1 .s3').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour1 .s7').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s1').style="display:block"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s6').style="display:block"
}
else if(hours == 5 || hours == 17){
    document.querySelector('.hour1 .s2').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s7').style="display:block"
    document.querySelector('.hour1 .s1').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s6').style="display:block"
}
else if(hours == 6 || hours == 18){
     document.querySelector('.hour1 .s2').style="display:none"
     document.querySelector('.hour2 .s6').style="display:none"
     document.querySelector('.hour1 .s1').style="display:block"
     document.querySelector('.hour1 .s3').style="display:block"
     document.querySelector('.hour1 .s4').style="display:block"
     document.querySelector('.hour1 .s5').style="display:block"
     document.querySelector('.hour1 .s6').style="display:block"
     document.querySelector('.hour1 .s7').style="display:block"
}
else if(hours == 7 || hours == 19){
    document.querySelector('.hour1 .s1').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour1 .s6').style="display:none"
    document.querySelector('.hour1 .s7').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
}
else if(hours == 8 || hours == 20){
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s1').style="display:block"
    document.querySelector('.hour1 .s5').style="display:block"
    document.querySelector('.hour1 .s6').style="display:block"
    document.querySelector('.hour1 .s7').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
}
else if(hours == 9 || hours == 21){
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s1').style="display:block"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s6').style="display:block"
    document.querySelector('.hour1 .s7').style="display:block"   
    
 }
 else if(hours == 10 || hours == 22){
    document.querySelector('.hour2 .s3').style="display:none"
    document.querySelector('.hour2 .s1').style="display:none"
    document.querySelector('.hour2 .s5').style="display:none"
    document.querySelector('.hour2 .s7').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s6').style="display:none"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    document.querySelector('.hour1 .s1').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
    document.querySelector('.hour1 .s5').style="display:block"
    document.querySelector('.hour1 .s7').style="display:block"
 }
 else if(hours == 11 || hours == 23){
    document.querySelector('.hour2 .s1').style="display:none"
    document.querySelector('.hour2 .s3').style="display:none"
    document.querySelector('.hour2 .s5').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour2 .s7').style="display:none"
    document.querySelector('.hour1 .s1').style="display:none"
    document.querySelector('.hour1 .s3').style="display:none"
    document.querySelector('.hour1 .s5').style="display:none"
    document.querySelector('.hour1 .s6').style="display:none"
    document.querySelector('.hour1 .s7').style="display:none"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s4').style="display:block"
    
 }
 else if(hours == 12 || hours == 24){
    document.querySelector('.hour2 .s1').style="display:none"
    document.querySelector('.hour2 .s3').style="display:none"
    document.querySelector('.hour2 .s5').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour2 .s7').style="display:none"
    document.querySelector('.hour2 .s6').style="display:none"
    document.querySelector('.hour1 .s1').style="display:none"
    document.querySelector('.hour1 .s4').style="display:none"
    document.querySelector('.hour1 .s2').style="display:block"
    document.querySelector('.hour1 .s3').style="display:block"
    document.querySelector('.hour1 .s5').style="display:block"
    document.querySelector('.hour1 .s6').style="display:block"
    document.querySelector('.hour1 .s7').style="display:block"
 }
 
}



/*----------------------- first min number check-----------------------*/

setInterval(minutes,10);

let n2 ;
let n1 ;
function minutes(){
    
    const d = new Date();
    let sec = d.getMinutes();

     n1 = Math.floor( sec / 10 % 10);
     n2 = Math.floor( sec % 10);


        if(n1 == 0){
            zero();
        }
        else if(n1 == 1){
            ten();
        }
        else if(n1 == 2){
            twenty();
        }
        else if(n1 == 3){
            thirty();
        }
        else if(n1 == 4){
            fourty();
        }
        else if(n1 == 5){
            fifty();
        }
}

/*------------------------- functions--------------------------------*/
function zeroToNine(n2){

if(n2 == 0){
        document.querySelector('.min2 .s6').style="display:none"
        document.querySelector('.min2 .s5').style="display:block"
        

}else if(n2 == 1){
    document.querySelector('.min2 .s1').style="display:none"
    document.querySelector('.min2 .s3').style="display:none"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s6').style="display:none"
    document.querySelector('.min2 .s7').style="display:none"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s4').style="display:block"


}
else if(n2 == 2){
     document.querySelector('.min2 .s1').style="display:none"
     document.querySelector('.min2 .s4').style="display:none"
     document.querySelector('.min2 .s2').style="display:block"
     document.querySelector('.min2 .s3').style="display:block"
     document.querySelector('.min2 .s5').style="display:block"
     document.querySelector('.min2 .s6').style="display:block"
     document.querySelector('.min2 .s7').style="display:block"

}
else if(n2 == 3){
    document.querySelector('.min2 .s1').style="display:none"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s4').style="display:block"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s3').style="display:block"
    document.querySelector('.min2 .s7').style="display:block"
    document.querySelector('.min2 .s6').style="display:block"

}
else if(n2 == 4){
    document.querySelector('.min2 .s3').style="display:none"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s7').style="display:none"
    document.querySelector('.min2 .s4').style="display:block"
    document.querySelector('.min2 .s1').style="display:block"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s6').style="display:block"

}
else if(n2 == 5){
    document.querySelector('.min2 .s2').style="display:none"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s4').style="display:block"
    document.querySelector('.min2 .s1').style="display:block"
    document.querySelector('.min2 .s3').style="display:block"
    document.querySelector('.min2 .s6').style="display:block"
    document.querySelector('.min2 .s7').style="display:block"

}
else if(n2 == 6){
     document.querySelector('.min2 .s2').style="display:none"
     document.querySelector('.min2 .s4').style="display:block"
     document.querySelector('.min2 .s1').style="display:block"
     document.querySelector('.min2 .s3').style="display:block"
     document.querySelector('.min2 .s6').style="display:block"
     document.querySelector('.min2 .s7').style="display:block"
     document.querySelector('.min2 .s5').style="display:block"


}
else if(n2 == 7){
    document.querySelector('.min2 .s1').style="display:none"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s6').style="display:none"
    document.querySelector('.min2 .s7').style="display:none"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s3').style="display:block"
    document.querySelector('.min2 .s4').style="display:block"


}
else if(n2 == 8){
    document.querySelector('.min2 .s1').style="display:block"
    document.querySelector('.min2 .s5').style="display:block"
    document.querySelector('.min2 .s6').style="display:block"
    document.querySelector('.min2 .s7').style="display:block"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s3').style="display:block"
    document.querySelector('.min2 .s4').style="display:block"

}
else if(n2 == 9){
    document.querySelector('.min2 .s1').style="display:block"
    document.querySelector('.min2 .s5').style="display:none"
    document.querySelector('.min2 .s6').style="display:block"
    document.querySelector('.min2 .s7').style="display:block"
    document.querySelector('.min2 .s2').style="display:block"
    document.querySelector('.min2 .s3').style="display:block"
    document.querySelector('.min2 .s4').style="display:block"

 }

}

/*-------------------------------last function----------------------*/
function zero(){
    document.querySelector('.min1 .s6').style="display:none"
    document.querySelector('.min1 .s1').style="display:block"
    document.querySelector('.min1 .s2').style="display:block"
    document.querySelector('.min1 .s3').style="display:block"
    document.querySelector('.min1 .s4').style="display:block"
    document.querySelector('.min1 .s5').style="display:block"
    document.querySelector('.min1 .s7').style="display:block"
    zeroToNine(n2);
}
function ten(){
    document.querySelector('.min1 .s1').style="display:none"
    document.querySelector('.min1 .s3').style="display:none"
    document.querySelector('.min1 .s5').style="display:none"
    document.querySelector('.min1 .s6').style="display:none"
    document.querySelector('.min1 .s7').style="display:none"
    document.querySelector('.min1 .s2').style="display:block"
    document.querySelector('.min1 .s4').style="display:block"
    zeroToNine(n2);
    
}
function twenty(){
    document.querySelector('.min1 .s1').style="display:none"
    document.querySelector('.min1 .s4').style="display:none"
    document.querySelector('.min1 .s2').style="display:block"
    document.querySelector('.min1 .s3').style="display:block"
    document.querySelector('.min1 .s5').style="display:block"
    document.querySelector('.min1 .s6').style="display:block"
    document.querySelector('.min1 .s7').style="display:block"
    zeroToNine(n2);
}
function thirty(){
    document.querySelector('.min1 .s1').style="display:none"
    document.querySelector('.min1 .s5').style="display:none"
    document.querySelector('.min1 .s2').style="display:block"
    document.querySelector('.min1 .s3').style="display:block"
    document.querySelector('.min1 .s4').style="display:block"
    document.querySelector('.min1 .s6').style="display:block"
    document.querySelector('.min1 .s7').style="display:block"
    zeroToNine(n2);
}
function fourty(){
    document.querySelector('.min1 .s3').style="display:none"
    document.querySelector('.min1 .s5').style="display:none"
    document.querySelector('.min1 .s7').style="display:none"
    document.querySelector('.min1 .s1').style="display:block"
    document.querySelector('.min1 .s2').style="display:block"
    document.querySelector('.min1 .s4').style="display:block"
    document.querySelector('.min1 .s6').style="display:block"
    zeroToNine(n2);
}
function fifty(){
    document.querySelector('.min1 .s2').style="display:none"
    document.querySelector('.min1 .s5').style="display:none"
    document.querySelector('.min1 .s1').style="display:block"
    document.querySelector('.min1 .s3').style="display:block"
    document.querySelector('.min1 .s4').style="display:block"
    document.querySelector('.min1 .s6').style="display:block"
    document.querySelector('.min1 .s7').style="display:block"
    zeroToNine(n2);
}
var b  = 1;

setInterval(blink,1000)
function blink(){
    
    if( b % 2 == 0){
        console.log(b)
        document.getElementById('dot2').style="display:none;"
        document.getElementById('dot').style="display:none;"
    }
    else{
        console.log(b)
        document.getElementById('dot2').style="display:block;"
        document.getElementById('dot').style="display:block;"
    }
    b++;
}
