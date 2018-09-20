// HandleBars Rendering Plugin
/*
// Sample Usage
$(templateSelector).Handle({
	source: sourceSelector,
	data: data,
	append: false,
	prepend: false,
	callback: function(){

	}
})
*/
$.fn.Handle = function( options ){
	// options
	options = $.extend({
		source: '',
		data: '',
		callback: '',
		append: false,
		prepend: false,
	}, options);
	// Handlebars Rendering Variables
	var source = (options.source).html();
	var compile = Handlebars.compile(source);
	var render = compile(options.data);
	// Rendering
	this.each( function() {
		// if append option is false
		if( options.append == true ){
			$(this).append(render);
		}
		else if( options.prepend == true ){
			$(this).prepend(render);
		}
		else{
			$(this).html(render);
		}
		if( typeof options.callback == 'function' ){
			options.callback.call(this);
		}
	});
};
