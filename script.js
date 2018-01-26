$(document).ready(function() {

	$( function() {
	    $( ".draggable" ).draggable({ snap: ".ui-widget-header" }).resizable();

	    $( "#droppable"  ).droppable({
	      accept: ".draggable",
      		classes: {
        	"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
      	},

	      drop: function( event, ui ) {
	        $( this )
	          .addClass( "ui-state-highlight" )
	          .html( "card added to TODO" )	
	      }    

	    });
	     $( "#droppable2"  ).droppable({
	     	accept: ".draggable",
      		classes: {
        	"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
      	},
	      drop: function( event, ui ) {
	        $( this )
	          .addClass( "ui-state-highlight" )
	          .html( "card added to DOING" )
	      }
	    });
	     $( "#droppable3"  ).droppable({
	     	accept: ".draggable",
      		classes: {
        	"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
      	},
	      drop: function( event, ui ) {
	        $( this )
	          .addClass( "ui-state-highlight" )
	          .html( "card added to DONE" )
	      }
	    });




	 });

	$( "#dialog" ).dialog({ 
		autoOpen: false,
        modal: true,
        show: { effect: "fold"},
        hide: { effect: "fold"},
    });
	$( "#infobutton" ).click(function() {
	  $( "#dialog" ).dialog( "open" );
	});

	//dialouge
	//$("#infobutton");

	//tabs
	$( function() {
    $( "#tabs" ).tabs();
  	} );

  	//datepicker
	$( "#date" ).datepicker();
	$('#date').change(function (event) {
	var date = $(event.target).val();
	$(".dateBox").text(date);
	});

	//colorpicker
	$('.colorpicker').change(function (event) {
	var hexColor = '#' + $(event.target).val();
	$(".draggable").css("background", hexColor);
	});

	//change title text
	$('.inputTitle').change(function (event) {
	var titleText = $(event.target).val();
	$(".title").text(titleText);
	});

	//change dialog content
	$('.inputContent').change(function (event) {
	var infoText = $(event.target).val();
	$(".dialogBox").text(infoText);
	});

	//delete card
	$("body").on("click", ".delete", function(event) {
    	$(event.target).closest(".draggable").remove();
  	});

	//reset card
	$("body").on("click", ".shake", function(event) {
    	var card = $(event.target).closest(".draggable");
 	$(".draggable").css("background", "#ADD8E6");
   
    card.toggle("shake", 1000);
    card.toggle("bounce", 2000);
	
	$(".title").text("Not set");
    $(".dialogBox").text("Content not set");
	$(".dateBox").text("Not set");
	$(".colorpicker").val("#ADD8E6");
	$(".inputfield").val("");


  	});

  	$('#wrapper .column').sortable({
        connectWith: '#wrapper .column',
        /*update: function(){
          console.log(getItems('#example-2-3'));
            $.cookie('cookie-2', getItems('#example-2-3'));
        }*/
    });

});


var clone = $(`<div class="draggable" class=""><button class="delete">X</button><div id="tabs"><ul><li><a href="#tabs-2">Main</a></li><li><a href="#tabs-1">Settings</a></li></ul><div id="dialog" title="Basic dialog"><p class="dialogBox">Content not set</p></div><div id="tabs-2">Title: <h3 class="title">Not set</h3>Deadline: <h3 class="dateBox">Not set</h3><button id="infobutton">Card content</button></div><div id="tabs-1"><form class="inputTitle" action=""><input type="text" name="title" placeholder="Set card title"></form><form class="inputContent" action=""><input type="text" name="title" placeholder="Set card content"></form><input type="text" name="date" id="date" placeholder="Set deadline"><input class="jscolor colorpicker" value="cc66ff"></div></div></div>`);

$(function(){
    $('#createbutton').on('click', function(){
		// var clone = $('.draggable').clone();
        $("#wrapper").append(clone);
    });
});









