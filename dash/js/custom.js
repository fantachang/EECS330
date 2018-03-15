
var flag = 0;
  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

function errorjump() {
 window.location.href = 'error.html';
}

function jumpback() {
window.location.href = '../index.html';	
}
 
function addcourse() {
window.location.href = 'addcourse.html';
}

function uploadnote() {
window.location.href = 'upload.html';	
}

function notepage() {
	course  = document.getElementById("subject").value;
    file= document.getElementById("fileName").value;
    material = document.getElementById("notesFile").value;
    if (course == "" || file == "" || material == "" ) {
		alert("Please fill in all the required information");	
	}
	else {
        var labelc=document.getElementById("subject").value
		document.getElementById("subject").value="";
		document.getElementById("fileName").value="";
		document.getElementById("notesFile").value="";
	alert('Successfully Uploaded');
        if (labelc == "EECS391"){
	window.location.href = '../noteSharing-master/index111391add.html';}
        else if (labelc == "EECS351"){
            window.location.href = '../noteSharing-master/index111351add.html';
        }
        else{
            window.location.href = '../noteSharing-master/index111330add.html';
        }
	}
}

function jump() {
	window.location.href = 'dashboard1.html';
}

function show() {
	window.location.href = 'dashboard1.html';	
}

function backtodash() {
	window.location.href = 'dashboard.html';	
	
}
