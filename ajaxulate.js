var ajaxulate;
ajaxulate = {
	post: function(url, data, callback){
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			success: callback,
			error: callback,
			done: callback
		});
	},
	get: function(url, data, callback){
		$.ajax({
			url: url,
			type: "GET",
			data: data,
			success: callback,
			error: callback,
			done: callback
		});
	}
};

if(!window.jQuery){
	console.error("jQuery was not detected, ajaxulate will not load correctly.");
}
