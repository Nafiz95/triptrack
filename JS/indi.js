$(document).ready(function() {
 
   var thisyear = new Date().getFullYear();
   $('#footerdate').text(thisyear);
   $("#author").text("NAFIZ SADMAN PREETOM");
   
   //("#div1").hide();
   //$("#div2").hide();
  
  //LOGIN BUTTON CLICK
  $("#Login").click(function(){
    $("#div1").hide();
    
    var form=$('<form>');
    $('#div2').append(form);
    
    var formgrp=$('<div>').addClass("form-group");
    form.append(formgrp);
    
    var in1=$('<input>').addClass("form-control").attr({type:"email", placeholder:"Enter email", id:"user1"});
    formgrp.append(in1);
    
    
    var formgrp2=$('<div>').addClass("form-group");
    form.append(formgrp2);
    
    var in2=$('<input>').addClass("form-control").attr({type:"password", placeholder:"Password", id:"pass1"});
    formgrp2.append(in2);
    
    var btngrp=$('<div>').addClass("clearfix").attr("id","g2gdashbtns");
    form.append(btngrp);
    
    var btn1=$('<button>').addClass("btn btn-dark").attr({type:"button", id:"gotodash1"}).text("Initiate");
    btngrp.append(btn1);
    var btn2=$('<button>').addClass("btn btn-danger").attr({type:"button", id:"frgtpass"}).text("Can't Recall Password?");
    btngrp.append(btn2);
      //onclick="location.href='http://google.com';" value="Go to Google" 
    $("#div2").css("height", "40vh");
    $("#div2").css("visibility", "visible");
    $("#gotodash1").click(function(){
     if ($('#user1').val() =="nafiz@gmail.com" && $('#pass1').val() =="WAKANDA"  )
     {
       
        document.location.href = "dashBoard.html";
     }
     else if ($('#user1').val() =="nafiz@gmail.com" && $('#pass1').val() ==""  )
     {
        alert("PASS WITHOUT PASS? NO.");
     }
     else if ($('#user1').val() =="" && $('#pass1').val() =="WAKANDA"  )
     {
        alert("PASS WITHOUT NAME? NO.");
     }
     else if ($('#user1').val() =="" && $('#pass1').val() ==""  )
     {
        alert("THERES A REASON FOR THE INPUT AREA");
     }
     else alert("WHO ARE YOU");
     
    });
    
  });
  
  
  //SIGN UP BUTTON CLICK
 $("#Signup").click(function(){
    $("#div1").hide();
    
    var form=$('<form>');
    $('#div2').append(form);
    
    var formgrp=$('<div>').addClass("form-group");
    form.append(formgrp);
    
    var in1=$('<input>').addClass("form-control").attr({type:"email", placeholder:"Enter email", id:"em"});
    formgrp.append(in1);
    
    
    var formgrp2=$('<div>').addClass("form-group");
    form.append(formgrp2);
    
    var in2=$('<input>').addClass("form-control").attr({type:"password", placeholder:"Password", id:"pass"});
    formgrp2.append(in2);
    
    var formgrp3=$('<div>').addClass("form-group");
    form.append(formgrp3);
    
    var in3=$('<input>').addClass("form-control").attr({type:"password", placeholder:"Enter Password Again For No Reason", id:"repass"});
    formgrp3.append(in3);
    
   var formgrp4=$('<div>').addClass("form-check");
   form.append(formgrp4);
   
   var in4=$('<input>').addClass("form-check-input").attr({type:"checkbox",  id:"policy"});
   formgrp4.append(in4);
   
   var in4lbl= $('<label>').addClass("form-check-label").attr("for","policy").text("I solemnly swear I agree to the terms and conditions");
   formgrp4.append(in4lbl);
   
   var btngrp=$('<div>').addClass("clearfix").attr("id","g2gdashbtns");
   form.append(btngrp);
  
   var btn1=$('<button>').addClass("btn btn-dark").attr({type:"button", id:"gotodash2"}).text("Add Me!");
   $("#g2gdashbtns").css("padding-left","35%");
   btngrp.append(btn1);
   
    
   $("#div2").css("height", "60vh");
   $("#div2").css("background-color", "#fc9309");
   $("#gotodash2").prop("disabled",true);
   $('#policy').click(function(){
         if($(this).is(":checked")){
             $("#gotodash2").prop("disabled",false);
         }
          else if($(this).is(":not(:checked)")){
             $("#gotodash2").prop("disabled",true);
          }
     });
   $("#div2").css("visibility", "visible");
   
    
  });
  
  
   //INITIATE ADD ME BUTTON CLICK
 
  
  
  
});
  
