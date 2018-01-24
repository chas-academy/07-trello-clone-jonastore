$(document).ready(function() {

	$( function() {
	    $( ".draggable" ).draggable({ snap: ".ui-widget-header" }).resizable();
;
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

	$( "#dialog" ).dialog({ autoOpen: false });
	$( "#infobutton" ).click(function() {
	  $( "#dialog" ).dialog( "open" );
	});

	//dialouge
	$("#infobutton");

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
	var infoText = $(event.target).val();
	$(".title").text(infoText);
	});

	//change dialog content
	$('.inputContent').change(function (event) {
	var infoText = $(event.target).val();
	$(".dialogBox").text(infoText);
	});

});


var clone = '<div class="draggable" class=""><button class="delete">X</button><div id="tabs"><ul><li><a href="#tabs-2">Main</a></li><li><a href="#tabs-1">Settings</a></li></ul><div id="dialog" title="Basic dialog"><p class="dialogBox">Content not set</p></div><div id="tabs-2">Title: <h3 class="title">Not set</h3>Deadline: <h3 class="dateBox">Not set</h3><button id="infobutton">Card content</button></div><div id="tabs-1"><form class="inputTitle" action=""><input type="text" name="title" placeholder="Set card title"></form><form class="inputContent" action=""><input type="text" name="title" placeholder="Set card content"></form><input type="text" name="date" id="date" placeholder="Set deadline"><input class="jscolor colorpicker" value="cc66ff"></div></div></div>'
$(function(){
    $('#createbutton').on('click', function(){
		var clone = $('.draggable').clone();
        $("#wrapper").append(clone);
    });
});

//delete card
$("body").on("click", ".delete", function(event) {
    var card = $(event.target).closest(".draggable");
    card.toggle("shake");
    card.toggle("explode");
  });






