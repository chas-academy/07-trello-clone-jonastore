$(document).ready(function() {

	$( function() {
	    $( "#draggable" ).draggable().resizable();;
	    $( "#draggable" ).draggable({ snap: ".ui-widget-header" });
	    $( "#droppable"  ).droppable({
	      accept: "#draggable",
      		classes: {
        	"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
      	},
	      drop: function( event, ui ) {

	        $( this )
	          .addClass( "ui-state-highlight" )
	      }
	    });
	     $( "#droppable2"  ).droppable({
	     	accept: "#draggable",
      		classes: {
        	"ui-droppable-active": "ui-state-active",
        	"ui-droppable-hover": "ui-state-hover"
      	},
	      drop: function( event, ui ) {
	        $( this )
	          .addClass( "ui-state-highlight" )
	      }
	    });


	 });

	$( "#dialog" ).dialog({ autoOpen: false });
	$( "#infobutton" ).click(function() {
	  $( "#dialog" ).dialog( "open" );
	});


	$( "#date" ).datepicker();

	$("#infobutton")



});
