

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