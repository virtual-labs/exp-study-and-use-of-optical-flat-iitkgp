
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#myTables").click(function(){	
	
    $("#obsTable1").slideToggle("slow");
	
  
	});
	
 
  });

function seudovalue1(){
	
$('#seudobox').val(1);	
 window.location.assign("index.html");	
}

function seudovalue2(){
	
$('#seudobox').val(2);	
 window.location.assign("index_height.html");	
}

///switch on off

function onoff(){
	
if(document.getElementById('sw').src.match("./images/tsw_off.png")){
document.getElementById('sw').src = "./images/tsw_on.png";

$('#light').css('display','block');	
$('#lightray').css('display','block');

if(document.getElementById('seudobox').value == 1){
if(document.getElementById('chkobj').value == 1){
	fringe1();
}
if(document.getElementById('chkobj').value == 2){
	fringe2();
}
if(document.getElementById('chkobj').value == 3){
	fringe3();
}
}	

if(document.getElementById('seudobox').value == 2){
	showfringe();
	
}
}	

else if	(document.getElementById('sw').src.match("./images/tsw_on.png")){
document.getElementById('sw').src = "./images/tsw_off.png";

$('#light').css('display','none');	
$('#lightray').css('display','none');

if(document.getElementById('seudobox').value == 1){
 if(document.getElementById('chkobj').value == 1){
	document.getElementById('fringe').classList.remove("fringe1");	
}
if(document.getElementById('chkobj').value == 2){
	document.getElementById('fringe').classList.remove("fringe1");	
}
 if(document.getElementById('chkobj').value == 3){
	document.getElementById('fringe').classList.remove("fringe1");	
}	 
}

if(document.getElementById('seudobox').value == 2){
	document.getElementById('patternL').classList.remove("fringe2");
	document.getElementById('patternR').classList.remove("fringe2");
	document.getElementById('patternL').style.display = "none";
	document.getElementById('patternR').style.display = "none";
	
}	
}

}

function obj1(){	
$('#blkobj').css('display','block');
$('#mgauge').css('display','none');
$('#sgauge').css('display','none');
$('#chkobj').val(1);
}

function obj2(){	
$('#blkobj').css('display','none');
$('#mgauge').css('display','block');
$('#sgauge').css('display','none');
$('#chkobj').val(2);
}

function obj3(){	
$('#tobj').css('display','none');
$('#mgauge').css('display','none');
$('#sgauge').css('display','block');
$('#chkobj').val(3);
}

///choose flats

function flat1(){
if(document.getElementById('seudobox').value==1){	
$('#opticalF').attr('src','./images/regular.png');
$('#opticalF').css('display','block');
}
if(document.getElementById('seudobox').value==2){	
$('#opticalF2').attr('src','./images/regular.png');
$('#opticalF2').css('display','block');
}
}

function flat2(){	
if(document.getElementById('seudobox').value==1){
$('#opticalF').attr('src','./images/concave.png');
$('#opticalF').css('display','block');
}
if(document.getElementById('seudobox').value==2){
$('#opticalF2').attr('src','./images/concave.png');
$('#opticalF2').css('display','block');
}
}

function flat3(){
if(document.getElementById('seudobox').value==1){	
$('#opticalF').attr('src','./images/convex.png');
$('#opticalF').css('display','block');
}
if(document.getElementById('seudobox').value==2){	
$('#opticalF2').attr('src','./images/convex.png');
$('#opticalF2').css('display','block');
}
}

function fringe1(){///round fringe
	
	$('#fringe').attr('src','./images/fr1.png');	
	
	setTimeout(function(){
	document.getElementById('fringe').classList.add("fringe1");	
	$('#fringe').css('width','22%');
	$('#fringe').css('left','41.5%');
	$('#fringe').css('top','65.5%');
	$('#fringe').css('display','block');
	 },3000);
	 
	setTimeout(function(){		
	alert('Tentatively flat surface');	
	},5000); 
}

function fringe2(){///mastergauge fringe
	
	$('#fringe').attr('src','./images/fr2.png');	
	
	setTimeout(function(){
	document.getElementById('fringe').classList.add("fringe1");
	$('#fringe').css('width','6.5%');
	$('#fringe').css('height','15%');
	$('#fringe').css('left','49%');
	$('#fringe').css('top','66.5%');
	$('#fringe').css('display','block');
	 },3000);
	 setTimeout(function(){		
	alert('Tentatively flat surface');	
	},5000); 
}

function fringe3(){///sample gauge fringe
	$('#fringe').attr('src','./images/fr2.png');	
	
	setTimeout(function(){
	document.getElementById('fringe').classList.add("fringe1");
	$('#fringe').css('width','6%');
	$('#fringe').css('height','16.5%');
	$('#fringe').css('left','50%');
	$('#fringe').css('top','65.5%');
	$('#fringe').css('display','block');
	 },3000);
	 setTimeout(function(){		
	alert('Tentatively flat surface');	
	},5000); 
}

///////////////////////optical flat as height comparison/////////////////////////////////////
var counter = 0;

function showfringe(){
	
counter++;

if(counter==1){
	$('#patternL').attr('src','./images/ptrn2.png');
	$('#patternR').attr('src','./images/ptrn1.png');
	
	setTimeout(function(){
	document.getElementById('patternL').classList.add("fringe2");
	document.getElementById('patternR').classList.add("fringe2");
	$('#patternL').css('display','block');
	$('#patternR').css('display','block');
	$('#n').val(5);
	 },3000);
}	
	
else if(counter==2){
	$('#patternL').attr('src','./images/ptrn3.png');
	$('#patternR').attr('src','./images/ptrn3.png');
	
	setTimeout(function(){
	document.getElementById('patternL').classList.add("fringe2");
	document.getElementById('patternR').classList.add("fringe2");
	$('#patternL').css('display','block');
	$('#patternR').css('display','block');
	$('#n').val(10);
	 },3000);
}	

else if(counter==3){
	$('#patternL').attr('src','./images/ptrn4.png');
	$('#patternR').attr('src','./images/ptrn3.png');
	
	setTimeout(function(){
	document.getElementById('patternL').classList.add("fringe2");
	document.getElementById('patternR').classList.add("fringe2");
	$('#patternL').css('display','block');
	$('#patternR').css('display','block');
	$('#n').val(15);
	 },3000);
}	
	
else if(counter==4){
	$('#patternL').attr('src','./images/ptrn4.png');
	$('#patternR').attr('src','./images/ptrn4.png');
	
	setTimeout(function(){
	document.getElementById('patternL').classList.add("fringe2");
	document.getElementById('patternR').classList.add("fringe2");
	$('#patternL').css('display','block');
	$('#patternR').css('display','block');
	$('#n').val(20);
	 },3000);
}	
	
else if(counter==5){
	$('#patternL').attr('src','./images/ptrn4.png');
	$('#patternR').attr('src','./images/ptrn4.png');
	
	setTimeout(function(){
	document.getElementById('patternL').classList.add("fringe2");
	document.getElementById('patternR').classList.add("fringe2");
	$('#patternL').css('display','block');
	$('#patternR').css('display','block');
	$('#n').val(25);
	 },3000);
}	
	
else if(counter==6){
	counter =0;
}	
	
	
}



 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {///thickness

	
    arr[0] = tabrowindex+1 ;
    arr[1] = $('#n').val();///math.divide(math.floor(math.multiply($('#t1').val(),1000)),1000);
    arr[2] = $('#sgh').val();///math.divide(math.floor(math.multiply($('#t2').val(),1000)),1000);
	arr[3] = percentErr;
   
	
	table = document.getElementById("obsTable1");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 6) {
        
         // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  


/// clear button function

function Refresh(){///donot keep the name of the function as clear


	var Dtable= document.getElementById('obsTable1');
	
	document.getElementById('n').value = 0;
	document.getElementById('sgh').value = 0;
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	
	
 }

var percentErr;
function calculate(){
	var waven = $('#n').val();
	var lamda = math.multiply(0.509,math.pow(10,-3));
	var G = 30;
	var L =15;
	var delH = math.multiply(math.multiply(waven,math.divide(lamda,2)),math.divide(G,L));
	var ActH = math.add(20,delH);
	$('#sgh').val(ActH);
	percentErr = math.multiply(math.divide(delH,20),100);
}

