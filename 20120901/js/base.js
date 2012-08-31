$(function() {
	$(document).ready(function(){
		$.jmpress("template", "auto", {
			children: function(idx) {
				return {
					y: 400 ,
					x: -300 + idx * 300 ,
					template: "auto" ,
					scale: 0.3
				};
			}
		});

		$('#jmpress').jmpress({
			stepSelector: 'section'		,hash: { use: false }

		});
	});
});