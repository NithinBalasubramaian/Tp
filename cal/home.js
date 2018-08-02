//alert ("Welcome to Technological Paradice TP");
function add(){
    var a,b,c;
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
//c=Number(document.getElementById("c").value);
    d=a+b;
    document.getElementById("x").innerHTML="TOTAL:"+d;
document.getElementById("y").innerHTML="";
}

function sub(){
    var a,b,c,d;
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    
//c=Number(document.getElementById("c").value);
    d=a-b;
   document.getElementById("x").innerHTML="TOTAL:"+d;
document.getElementById("y").innerHTML="";
}
function mul(){
    var a,b,d;
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);

//c=Number(document.getElementById("c").value);
    
    d=a*b;
    document.getElementById("x").innerHTML="TOTAL:"+d;
document.getElementById("y").innerHTML="";
}
function div(){
    var a,b,d,e,f;
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);

//c=Number(document.getElementById("c").value);
    
    d=a/b; document.getElementById("x").innerHTML="TOTAL:Quotient= "+d;
    e=a%b;  document.getElementById("y").innerHTML="TOTAL:Remainder="+e;
}
function clr(){
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    //document.getElementById("c").value="";
    document.getElementById("x").innerHTML="";
    document.getElementById("y").innerHTML="";
}
//area & volume
function area1(){
var dia,dep,radius,area,vol;
dia=Number(document.getElementById("diameter").value);
dep=Number(document.getElementById("depth").value);
radius=dia/2;
area=radius*radius*3.14;
vol=area*dep;
document.getElementById("rad").innerHTML="RADIUS OF CYLINDER=" +radius+ "meter";
document.getElementById("area").innerHTML="AREA OF CYLINDER="+ area+"square meter";
document.getElementById("vol").innerHTML="VOLUME OF CYLINDER=" +vol+"cubic meter";
}
function clr1(){
     document.getElementById("diameter").value="";
      document.getElementById("depth").value="";
         document.getElementById("rad").innerHTML="";
            document.getElementById("area").innerHTML="";
               document.getElementById("vol").innerHTML="";
}
//area & volume of rectangle
function area2(){
var len,heig,bre,area1,vol1;
len=Number(document.getElementById("length").value);
bre=Number(document.getElementById("breadth").value);
heig=Number(document.getElementById("heigth").value);
area1=len*bre;
vol1=area1*heig;
document.getElementById("area1").innerHTML="AREA OF RECTANGLE="+ area1+"square meter";
document.getElementById("vol1").innerHTML="VOLUME OF RECTANGLE =" +vol1+"cubic meter";
}
function clr2(){
     document.getElementById("length").value="";
      document.getElementById("breadth").value="";
         document.getElementById("heigth").value="";
            document.getElementById("area1").innerHTML="";
               document.getElementById("vol1").innerHTML="";
}
//area & volume of Square
function area3(){
var sid,heig1,area2,vol2;
sid=Number(document.getElementById("side").value);
heig1=Number(document.getElementById("heigth1").value);
area2=sid*sid;
vol2=area2*heig1;
document.getElementById("area2").innerHTML="AREA OF SQUARE="+ area2+"square meter";
document.getElementById("vol2").innerHTML="VOLUME OF SQUARE =" +vol2+"cubic meter";
}
function clr3(){
     document.getElementById("side").value="";
         document.getElementById("heigth1").value="";
            document.getElementById("area2").innerHTML="";
               document.getElementById("vol2").innerHTML="";
}
//area & volume of Cone
function area4(){
var diam,heig2,area3,vol3;
diam=Number(document.getElementById("diam").value);
heig2=Number(document.getElementById("heigth2").value);
radi=diam/2;
area3=3.14*radi*radi;
vol3=area3*(heig2/3);
document.getElementById("area3").innerHTML="AREA OF SQUARE="+ area3+"square meter";
document.getElementById("vol3").innerHTML="VOLUME OF SQUARE =" +vol3+"cubic meter";
}
function clr4(){
     document.getElementById("diam").value="";
         document.getElementById("heigth2").value="";
            document.getElementById("area3").innerHTML="";
               document.getElementById("vol3").innerHTML="";
}
//area & volume of Cube
function area5(){
var side1,area4,vol4;
side1=Number(document.getElementById("side1").value);
vol4=side1*side1*side1;
area4=6*side1*side1;
document.getElementById("area4").innerHTML="AREA OF SQUARE="+ area4+"square meter";
document.getElementById("vol4").innerHTML="VOLUME OF SQUARE =" +vol4+"cubic meter";
}
function clr5(){
     document.getElementById("side1").value="";
            document.getElementById("area4").innerHTML="";
               document.getElementById("vol4").innerHTML="";
}