/*
File: script.js
GUI Assignment: Get user inputs from the form then validate the inputs by using with jQueryand validation plugin and then use them to generate the multiplication table.
Yingchi Lin, UMass Lowell Computer Science, yingchi_Lin@student.uml.edu
Copyright (c) 2022 by Yingchi. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
June 22, 2022
*/


$(document).ready(function() {
      /* Add a custom validation method: https://jqueryvalidation.org/jQuery.validator.addMethod/ */
      $.validator.addMethod("greater_equal", function (value, element, param) {
      return this.optional(element) || parseInt(value) >= parseInt($(param).val());
      }, "Wrong value");
  
      /* Add a custom validation method: https://jqueryvalidation.org/jQuery.validator.addMethod/ */
      /* To validate if it is a decimal number: https://www.w3schools.com/jsref/jsref_indexof.asp */
      $.validator.addMethod('no_decimal', function (value, element, param) {
        return this.optional(element) || value.indexOf('.') < 0;
      }, "Integers only");
  
      $("#input").validate({
        rules: {
          min_col : {
            required: true,
            number: true,
            min: -50,
            max: 50,
            no_decimal: true
          },
          max_col: {
            required: true,
            number: true,
            min: -50,
            max: 50,
            no_decimal: true,
            greater_equal: "#min_col"
          },
          min_row: {
             required: true,
             number: true,
             min: -50,
             max: 50,
             no_decimal: true
          },
          max_row: {
             required: true,
             number: true,
             min: -50,
             max: 50,
             no_decimal: true,
             greater_equal: "#min_row"
          }
        },
        messages : {
          min_col: {
            required: "Please enter an integer",
            number: "Please enter numbers",
            max: "The maximum column should not be more than 50",
            min: "The minimum column should not be less than -50",
            no_decimal: "Please enter only integers no decimal",
          },
          max_col: {
            required: "Please enter an integer",
            number: "Please enter numbers",
            max: "The maximum column should not be more than 50",
            min: "The minimum column should not be less than -50",
            no_decimal: "Please enter only integers no decimal",
            greater_equal: "The value of maximum column should be greater than or equal to minimun column value."
          },
          min_row: {
            required: "Please enter an integer",
            number: "Please enter numbers",
            max: "The maximum row should not be more than 50",
            min: "The minimum row should not be less than -50",
            no_decimal: "Please enter only integers no decimal",
          },
          max_row: {
            required: "Please enter an integer",
            number: "Please enter numbers",
            max: "The maximum row should not be more than 50",
            min: "The minimum row should not be less than -50",
            no_decimal: "Please enter only integers no decimal",
            greater_equal: "The value of maximum row should be greater than or equal to to minimun row value."
          }
        }
      });

    /* If there is no error, generate the table */
    $("#generate").on('click', function(){
        if($("#input").valid())
        {
            multiplicationTable();
        }
        else{
            return 0;
        }
    });

    $("form").submit(function(e){
        e.preventDefault();
    });
    
    
  });

  function multiplicationTable() {
    var table = "<table>";
    table='<table id="mtable">';
    table = table + "<tr><th></th>";
    
    // Get the input values
    var min_col= +document.getElementById("min_col").value;
    var max_col= +document.getElementById("max_col").value;
    var min_row= +document.getElementById("min_row").value;
    var max_row= +document.getElementById("max_row").value;
       
   
    // The header row
    for (var x=min_col; x<=max_col; x++) {
        table = table + "<th>" + x + "</th>";
    }
    table = table + "</tr>";

    // The body of the table
    for (y=min_row; y<=max_row; y++) {
         table = table + "<tr>"; // New row
         table = table + "<th>" + y + "</th>"; // Row index

    // The table cells
    for (x=min_col; x<=max_col; x++) {
        table = table + "<td>" + (x*y) + "</td>";
        }

    // The row ending tag
    table = table + "</tr>"; 
    }
    
    // Add the table to html
    table+='</table>';
    document.getElementById("result").innerHTML = table;
}  

  