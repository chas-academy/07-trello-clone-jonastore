$(document).ready(function() {

	$( function() {
	    $( ".draggable" ).draggable({ snap: ".ui-widget-header" }).resizable();;
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


	$( "#date" ).datepicker();

	$("#infobutton")

	$( function() {
    $( "#tabs" ).tabs();
  	} );

  	$('#colorpicker').on('change', function (e) {

	var hexColor = '#' +this.value;

	$(".draggable").css("background", hexColor);

});



});

var clone = '<div class="draggable" class="ui-widget-content"><button class="delete">X</button><div id="tabs"><ul><li><a href="#tabs-2">Card color</a></li><li><a href="#tabs-1">Set deadline</a></li></ul><p>Drag me around</p><button id="infobutton">More info</button><div id="dialog" title="Basic dialog"><p>This is the information that will appear on the card.</p></div><div id="tabs-1"><input type="text" name="date" id="date" placeholder="Set deadline"></div><div id="tabs-2">something here</div></div></div>'

$(function(){
    $('#createbutton').on('click', function(){
		var clone = $('.draggable').clone();
        $("#wrapper").append(clone);
    });
});

$("body").on("click", ".delete", function(event) {
    $(event.target).closest(".draggable").remove();
  });






