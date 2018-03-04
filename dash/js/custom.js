
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
		document.getElementById("subject").value="";
		document.getElementById("fileName").value="";
		document.getElementById("notesFile").value="";
	alert('Successfully Uploaded');
	window.location.href = '../noteSharing-master/index111.html';	
	}
}

function jump() {
	window.location.href = 'dashboard.html';
}

function show() {
	window.location.href = 'dashboard1.html';	
}

