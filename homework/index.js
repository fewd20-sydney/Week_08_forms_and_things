$(document).ready(function(){

	$('button').click(function(){

		var data = {
			'user': $('input').val(),
			'message': $('textarea').val()
		};

		//data = JSON.stringify(data);

		$.post('https://fewd20.herokuapp.com/chat', data, function(data, status){

			$('#list').append('<li> name: ' + $('input').val() + ' message :' + $('textarea').val() + '</li>');
			    
		}).fail(function(data, status){
			
		    console.log(data);
		});

		$.get('https://fewd20.herokuapp.com/chat', function(data, status){
				console.log(data);
		});

	});

});

