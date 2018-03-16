'use strict';
  var arr_id = [];
    var newNotelist = [];

function CreatNote(doc_name, doc_description,doc_subject,lke_count){
  this.doc_name = doc_name;
  this.doc_description = doc_description;
    this.subject = doc_subject;
    this.lke_count = lke_count;
    return this;
}
var count=7;
init();
function add(Notes){  
            var tab=document.getElementById("studyMaterials");  
         //   var userId=$("#userId").value;  
        //    var userName=$("#userName").value;  
        //    var userAge=$("#userAge").value;  
  
            var newTr=tab.insertRow(1);  
            var idTd=newTr.insertCell(0);  
            var nameTd=newTr.insertCell(1);  
            var DesTd=newTr.insertCell(2); 
            var subTd=newTr.insertCell(3);
            var likeTd=newTr.insertCell(4);
            idTd.innerHTML=count;  
    count++;
            nameTd.innerHTML=Notes.doc_name;  
            DesTd.innerHTML=Notes.doc_description;
            subTd.innerHTML=Notes.subject;
            likeTd.innerHTML=Notes.lke_count;
            
}
function creatlist(){
    var newNotelist = [];
    for(var count=0;count<5;count++){
 var noteslide =new CreatNote(count, "Note", "On processing...","EECS391",30);
         newNotelist[count]= noteslide;
    }
    return newNotelist;
}
function addNotes2(Notelist)  {
            var myNotes = Notelist;
            var length = myNotes.length;
            var countStudyMaterial = 0;
            for(var i = 0;i<length;i++)
            {
              var noteObject = myNotes[i];
               arr_id[i] = noteObject.doc_id;
              var notesName = noteObject.doc_name;
              var description = noteObject.doc_description;
              var subject = noteObject.subject; 
              var likes = noteObject.like_count;
                countStudyMaterial++;
                $('#studyMaterials tbody').append('<tr> <td> ' + countStudyMaterial +' </td> <td>'+notesName+'</td> <td>'+description+'</td> <td>'+subject+'</td> <td> <i class="fa fa-thumbs-up fa-x" aria-hidden="true"></i> <span> ' +  likes + '</span></a></td></tr>');
            
            }
        } 

    
function upload()	{
	window.location.href = '../dash/upload.html';	
	
}
	

function init(){
    var Note1= new CreatNote("newNote", "On processing...","On processing...",0);
    add(Note1);
}

/*
    $('#arts').on('click', function(){


      $("#notesNavigation ul li").removeClass('active');

      $(this).parent().addClass('active');

      var url = "https://acadprojects.com/py/notes/sharing/note?category=arts";
      getNotes(url);
    });

    $("#engineering").on('click', function(){
      $("#notesNavigation ul li").removeClass('active');
      $(this).parent().addClass('active');

      var url = "https://acadprojects.com/py/notes/sharing/note?category=engineering";
      getNotes(url);

    });

    $("#science").on('click', function(){
      $("#notesNavigation ul li").removeClass('active');
      $(this).parent().addClass('active');

      var url = "https://acadprojects.com/py/notes/sharing/note?category=science";
      getNotes(url);

    });

    $("#maths").on('click', function(){
      $("#notesNavigation ul li").removeClass('active');
      $(this).parent().addClass('active');

      var url = "https://acadprojects.com/py/notes/sharing/note?category=mathematics";
      getNotes(url);

    });

    $("#latest").on('click', function(){
      $("#notesNavigation ul li").removeClass('active');
      $(this).parent().addClass('active');

      var url = "https://acadprojects.com/py/notes/sharing/note";
      getNotes(url);

    });

$("#submitBtn").on('click', function(){
      var docName = $("#fileName").val();
      var docDescription = $("#description").val();

      var subject = $("#subject").val();
      var documenType = $("#documentType").val();

      var myFile = $("input[type=file]")[0].files[0];


      if(docName == undefined || docName == "")
      {
        alert("Please fill Document Name");
        return false;
      }

      if(docDescription == undefined || docDescription == "")
      {
        alert("Please fill Document Description");
        return false;
      }

      if(subject == undefined || subject == "")
      {
        alert("Please Select Subject");
        return false;
      }

      if(documenType == undefined || documenType == "")
      {
        alert("Please Select Document type");
        return false;
      }

      if(myFile == undefined || myFile == "")
      {
        alert("Please Select a file to upload");
        return false;
      }

      $("#loader").css('display', 'block');

      var formdata = new FormData();

      formdata.append('file', myFile);
      formdata.append('document_type' , documenType);
      formdata.append('doc_description' , docDescription);
      formdata.append('doc_name' , docName);
      formdata.append('category' , subject);

      $.ajax({
        url: 'https://acadprojects.com/py/notes/sharing/note',
        data: formdata,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function(result)
        {
          alert("Submitted");

          $("#loader").css('display', 'none');
          location.reload();
        }
      });
  });
*/


