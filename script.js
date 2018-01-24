$(document).ready(function() {

	$( function() {
	    $( "#draggable" ).draggable({ snap: ".ui-widget-header" }).resizable();;
	    $( "#droppable"  ).droppable({
	      accept: "#draggable",
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
	     	accept: "#draggable",
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
	     	accept: "#draggable",
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


	$( "#date" ).datepicker();

	$("#infobutton")

	$( function() {
    $( "#tabs" ).tabs();
  	} );



});



$(function(){
    $('#createbutton').on('click', function(){
		var clone = $('#draggable').clone();
        $("#wrapper").append(clone);
    });
});

$("body").on("click", ".delete", function(event) {
    $(event.target).closest("#draggable").remove();
  });


