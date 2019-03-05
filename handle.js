// HandleBars Rendering Plugin
/*
// Sample Usage
// Handlebars Rendering Template - Element
$('#renderElement').Handle({
    source: $('#templateElement'),
    data: data,
    append: false,
    prepend: false,
    beforeCompile: function(){},
    afterCompile: function(){}
});
*/
$.fn.Handle = function( options ){
	// options
	options = $.extend({
		source: '',
		data: '',
		append: false,
		prepend: false,
		beforeCompile: '',
		afterCompile: '',
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
		if( typeof options.beforeCompile == 'function' ){
			options.beforeCompile.call(this);
		}
		if( typeof options.afterCompile == 'function' ){
			options.afterCompile.call(this)
		}
	});
};
