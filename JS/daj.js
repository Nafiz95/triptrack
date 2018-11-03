$(document).ready(function() {
   
   //GET DATE
   var thisyear = new Date().getFullYear();
   //HIDE THIS DIV INITIALLY
   $("#smry").hide();
   // ARRAY FOR LOCAL STORAGE
   var txtarr=[];
   var tblarr=[];
   var counter=1;
   
   
  //------DYNAMIC TABLE-------------------

   var row=$('<tr>').addClass("participantRow").attr("id","tblCont");
   $("#tbd").append(row);
   
   var spc=$('<td>').text('')
   $(row).append(spc);
   
   var d1=$('<td>');
   $(row).append(d1);
   
   var in1=$('<input>').addClass("required-entry").attr({type:"text", id:"item"+counter});
   d1.append(in1);
   
   var d2=$('<td>');
   $(row).append(d2);
   
   var in2=$('<input>').addClass("required-entry").attr({type:"text", id:"qty"+counter, style:"width:50px;"});
   d2.append(in2);
  
   var d3=$('<td>');
   $(row).append(d3);
   
   var in3=$('<input>').addClass("required-entry").attr({type:"text", id:"pc"+counter, style:"width:70px;"});
   d3.append(in3);
   
   var d4=$('<td>');
   $(row).append(d4);
   
   var r=$('<button>').addClass("btn btn-danger btn-sm remove").attr({type:"button",style:"margin:0;",id:counter }).text("Remove");
   d4.append(r);

   var row2=$('<tr>').attr("id","addButtonRow");
   $("#tbd").append(row2);
   
   var d5=$('<td>').attr("colspan","6");
   $(row2).append(d5);
   
   var c=$('<center>').attr("colspan","6");
   $(d5).append(c);
   
   var a=$('<button>').addClass("btn btn-success btn-sm add").attr({type:"button",style:"margin:0;" }).text("Add Item");
   $(c).append(a);
   
   
   
   
   
   
   //-------- CLASS FOR LOCAL STORAGES----------------   
   function textBox(tripNames,datepicker,hotelNames,hotelPrice){
        this.t_N=tripNames;
        this.t_D=datepicker;
        this.t_H=hotelNames;
        this.t_P=hotelPrice;
      }
      
   function tableData(item,quantity,price){
        this.t_i=item;
        this.t_q=quantity;
        this.t_pc=price;
       }
   
   
   $('#footerdate').text(thisyear);
   $("#author").text("NAFIZ SADMAN PREETOM");
   
   //------- GET DATE FUNCTION----------
   $(function () {
     $("#datepicker").datepicker({ 
           autoclose: true, 
           todayHighlight: true
     }).datepicker('update', new Date());
   });
   
   //-------ITEM TABLE DYNAMIC----------
   /* Variables */
      var p = $("#participants").val();
      var row = $(".participantRow");
      
      /* Functions */
      function getP(){
        p = $("#participants").val();
      }
      
      function addRow() {
         //$(this).find(".required-entry").val('');
         var row=$('<tr>').addClass("participantRow").attr("id","tblCont");
         $("#tbd").append(row);
         
         var spc=$('<td>').text('')
         $(row).append(spc);
         
         var d1=$('<td>');
         $(row).append(d1);
         
         var in1=$('<input>').addClass("required-entry").attr({type:"text", id:"item"+counter});
         d1.append(in1);
         
         var d2=$('<td>');
         $(row).append(d2);
         
         var in2=$('<input>').addClass("required-entry").attr({type:"text", id:"qty"+counter, style:"width:50px;"});
         d2.append(in2);
        
         var d3=$('<td>');
         $(row).append(d3);
         
         var in3=$('<input>').addClass("required-entry").attr({type:"text", id:"pc"+counter, style:"width:70px;"});
         d3.append(in3);
         
         var d4=$('<td>');
         $(row).append(d4);
         
         var r=$('<button>').addClass("btn btn-danger btn-sm remove").attr({type:"button",style:"margin:0;",id:counter }).text("Remove");
         d4.append(r);
         
          //------- REMOVE BUTTON CLICK----------
          r.click(function(event){
            console.log(event.target.id);
            $("#dataTable").find('tbody tr').remove();    //REMOVE ALL ROWS FROM SUMMARY FOR RENEWAL
            getP();
            if($("#participantTable tr").length === 2) {
              $(".remove").hide();
            } else if($("#participantTable tr").length - 1 ==2) {
              $(".remove").hide();
              removeRow($(this));
              var i = Number(p)-1;
              $("#participants").val(i);
            } else {
              removeRow($(this));
              var i = Number(p)-1;
              $("#participants").val(i);
            }
             //----------UPDATE LOCAL STORAGE------------------            
             var user = JSON.parse(localStorage.getItem('tblData'));  
             var targetID=event.target.id;
             user.splice((targetID-1),1); //l =4 id= 2 4-2 =2
             //localStorage.removeItem('tblData');
             localStorage.setItem('tblData',JSON.stringify(user));
             //$(".remove").attr("id",(counter-1-1));
             $('.remove').each(function(i, obj) {
                  $(obj).attr("id",(i+1))
              });
          });
      }
      
      function removeRow(button) {
        button.closest("tr").remove();
      }
      /* Doc ready */
      $(".remove").hide();
      
      $(".add").on('click', function () {
        counter=counter+1;
        $(".remove").show();
        getP();
        if($("#participantTable tr").length < 17) {
          addRow();
          
          var i = Number(p)+1;
          $("#participants").val(i);
        }
        
        $(this).closest("tr").appendTo("#participantTable");
        if ($("#participantTable tr").length === 3) {
          $(".remove").hide();
        } else {
          $(".remove").show();
        }
        
        var tbl_1=$('#item'+(counter-1)).val();
        var tbl_2=$('#qty'+(counter-1)).val();
        var tbl_3=$('#pc'+(counter-1)).val();
        tblarr.push(new tableData(tbl_1,tbl_2,tbl_3));
        localStorage.setItem('tblData',JSON.stringify(tblarr));
        
        
        
      });
      $("#participants").change(function () {
        var i = 0;
        p = $("#participants").val();
        var rowCount = $("#participantTable tr").length - 2;
        if(p > rowCount) {
          for(i=rowCount; i<p; i+=1){
            addRow();
          }
          $("#participantTable #addButtonRow").appendTo("#participantTable");
        } else if(p < rowCount) {
        }
      });
      
      
      
      
      //-------------------------LOCAL STORAGE-------------------------------
      // LOCAL STORAGE VARIABLES:: tripNames datepicker hotelNames hotelPrice table->item qty pc
     
      
      
      
      
      $("#save").on('click', function () {
        alert("Data Saved!");
        var t1=($('#tripNames').val());
        var date=($( '#datepicker' ).datepicker( "getDate" ));
        var d=date.toString();
        d=d.slice(0,10);
        var t2=($('#hotelNames').val());
        var t3=($('#hotelPrice').val() +'per Night');
        txtarr.push(new textBox(t1,d,t2,t3));
        localStorage.setItem('textData',JSON.stringify(txtarr));
        
        
        //-----------------textData--------------
        var t = JSON.parse(localStorage.getItem('textData'));
        
        t.forEach(function(product, index){
            
            $('#tN').text(product.t_N);
            $('#tD').text(product.t_D);
            $('#tH').text(product.t_H);
            $('#tP').text(product.t_P);
        });
        //---------------------tblData--------------
        var user = JSON.parse(localStorage.getItem('tblData'));     
    
        user.forEach(function(product, index){
            
            $("#dataTable").find('tbody')
            .append($('<tr>')
            .append($('<td>')
            .text((user[index].t_i)))
            .append($('<td>')
            .text((user[index].t_q)))
            .append($('<td>')
            .text((user[index].t_pc)))
                    );
        });
        
        
      });
      
     
      
      var back2=$('<button>').addClass("btn btn-primary").attr({type:"button", id:"back"}).text("Back");
      $('#smry').append(back2);
      var print=$('<button>').addClass("btn btn-danger").attr({type:"button", id:"pr"}).text("Print");
      $('#smry').append(print);
     
      $('#reset').click(function(){
           alert("All saved data has been deleted");
           localStorage.clear();
           
        });
      $("#show").on('click', function () {
        
        $("#summaryBtn").hide();
        $('#smry').show();
        // $('#tN').text($('#tripNames').val());
        // var date=($( '#datepicker' ).datepicker( "getDate" ));
        // var d=date.toString();
        // d=d.slice(0,10);
        // $('#tD').text(d);
        // $('#tH').text($('#hotelNames').val());   
        // $('#tP').text($('#hotelPrice').val() +'per Night');   
        
        
        
        
        
        
        
        
        $('#back').click(function(){
       
           $('#smry').hide();
           $('#summaryBtn').show();
          });
          
       
        $('#pr').click(function(){
     
            var divToPrint=document.getElementById('smry');

            var newWin=window.open('','Print-Window');
          
            newWin.document.open();
          
            newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
          
            newWin.document.close();
          
            setTimeout(function(){newWin.close();},10);
        });
       
        
      });
      
      
});
  
