var url = 'https://fewd20.herokuapp.com/chat';
var oldChats = [];
window.setInterval(chatCheck, 500);

// chatCheck();

function chatCheck () {
	$.get(url, function(data, status) {
		for (var i = 0; i < data.length; i++) {

			if (oldChats.indexOf(data[i].message) === -1) {
				oldChats.push(data[i].message);
			$('.messages').prepend('<li>' + data[i]['message'] + '<small class="author"> '+ data[i]['user'] +'</small></li>');
			}

		};

		}).fail(function(data) {
			console.log('not working');
		});	
}

$('#submit').click(function (){
	data = {
		user: $("#username").val(),
		message: $("#newMessage").val()
	};
	if (data['user'] === '' || data['message'] === '') {
		$('#error').fadeIn().delay(3000);
		$('#error').fadeOut();	
	} else {
		$.post (url, data, function(data, status) {

		});

		// clear the form
		$('#username').val("");
		$('#newMessage').val("");

	}

});