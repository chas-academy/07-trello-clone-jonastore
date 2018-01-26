$(document).ready(function() {
	$.widget("acme.yearclock", {
		options: {
			value: 0
		},
		//new Date($.now());
		//<input value="">
		_create: function() {
			this.element.addClass("yearclock");
			this._update();
		},

		_setOption: function() {

		},

		_update: function() {

			this.element.val("The current year is " + new Date().getFullYear());//new Date($.now())

		},

		_destroy: function() {

		},
	});
	//widget ends here

	var time = $("<input disabled />");
	time.appendTo(".yearclock");
	//init widget
	time.yearclock();

}); 