function regist(){
						
						user  = document.getElementById("username1").value
                        pass1 = document.getElementById("pass1").value
                        pass2 = document.getElementById("pass2").value
                        email = document.getElementById("email1").value
                      
						if (user==""||pass1==""||pass2==""||email=="") {
							alert("Please fill in all the required information");
						}
						
						else if(pass1!=pass2){
                            alert("Wrong password");
                        }
                        else if(!validateEmail(email)||email.indexOf(".edu") == -1) {
                            alert("Wrong email");
                        }
                        else {
							
						document.getElementById("username1").value="";
						document.getElementById("pass1").value="";
						document.getElementById("pass2").value="";
						document.getElementById("email1").value="";
						
						jump();
							}
							
							
					}
					
					
                    function validateEmail(email) 
                    {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
                    }
					
					function jump() {
			  window.location.href = 'dash/dashboard.html';			  
		  }
					
					
					
$('document').ready(function(){

  var latestUrl = "http://acadprojects.com/py/notes/sharing/note";
  getNotes(latestUrl);
  var arr_id = [];
  var flag = false;
  var oldId ='';
    function getNotes(dataUrl)
    {
      $("#loader").css('display', 'block');

      $.ajax({
        url: dataUrl,
        type: "GET",
        success: function(result){
            console.log(result);

            $("#studyMaterials tbody").empty();
            $("#questionPapers tbody").empty();
            $("#projectReports tbody").empty();

            var myNotes = result.notes;

            var length = myNotes.length;

            var countStudyMaterial = 0;
            var countQuestionPaper = 0;
            var countProjectReport = 0;

            for(var i = 0;i<length;i++)
            {
              var noteObject = myNotes[i];
               arr_id[i] = noteObject.doc_id;
              var notesName = noteObject.doc_name;
              var description = noteObject.doc_description;
              var subject = noteObject.subject.subject;
              var url = noteObject.doc_url;
              var likes = noteObject.like_count;

              var type = noteObject.document_type;

              if(type == 'Study Material')
              {
                countStudyMaterial++;
                $('#studyMaterials tbody').append('<tr> <td> ' + countStudyMaterial +' </td> <td>'+notesName+'</td> <td>'+description+'</td> <td>'+subject+'</td> <td><a target="_blank" href="'+url+'">Download</a></td><td> <a href="#" class="btnLike" id="' + arr_id[i] + '"><i class="fa fa-thumbs-up fa-x" aria-hidden="true"></i> <span> ' +  likes + '</span></a></td></tr>');

              }
              else if(type == 'Question Papers')
              {
                countQuestionPaper++;
                $('#questionPapers tbody').append('<tr> <td> ' + countQuestionPaper +' </td> <td>'+notesName+'</td> <td>'+description+'</td> <td>'+subject+'</td> <td><a target="_blank" href="'+url+'">Download</td><td> <a href="#" class="btnLike" id="' + arr_id[i] + '"><i class="fa fa-thumbs-up fa-x" aria-hidden="true"></i> <span> ' +  likes + '</span></a></td></tr>');

              }
              else if(type == 'Project Report')
              {
                countProjectReport++;
                $('#projectReports tbody').append('<tr> <td> ' + countProjectReport +' </td> <td>'+notesName+'</td> <td>'+description+'</td> <td>'+subject+'</td> <td><a target="_blank" href="'+url+'">Download</td><td> <a href="#" class="btnLike" id="' + arr_id[i] + '"><i class="fa fa-thumbs-up fa-x" aria-hidden="true"></i> <span> ' +  likes + '</span></a></td> </tr>');

              }


            }

            $("#loader").css('display','none');

        }});
    }

});


