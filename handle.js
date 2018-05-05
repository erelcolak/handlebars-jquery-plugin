// Handle Bars Rendering Plugin
/*
// Sample Usage
$(templateSelector).Handle({
	source: sourceSelector,
	data: data,
	callback: function(){

	}
})
*/
$.fn.Handle = function( options ){
	// options
	options = $.extend({
		source: '',
		data: '',
		callback: ''
	}, options);
	// Handlebars Rendering Variables
	var source = (options.source).html();
	var compile = Handlebars.compile(source);
	var render = compile(options.data);
	// Rendering
	this.each( function() {
		$(this).html(render);
		if( typeof options.callback == 'function' ){
			options.callback.call(this);
		}
	});
};
