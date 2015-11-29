var url = "https://fewd20.herokuapp.com/chat";
var user;
var message;
var usedMessage = [];

function messageData(){

	$.get(url, function(data, status){
	
	 for (var i = 0; i < data.length; i++){
		console.log(data[i]);

		if (usedMessage.indexOf(data[i].message) === -1){
				usedMessage.push(data[i].message);

		$('#list').append('<li>' + '<b>Name:</b>' + ' ' + data[i].user + '</br> ' + '<b>Message:</b>' + ' ' + data[i].message +  '</li>');
			}
		}

	 }).fail(function(data){
	 	console.log('not working');
	 })
}

/* Print the initial message data that is already in the database */

messageData();


setInterval(function(){ messageData(); }, 3000);

/* submit message */

$('#submit').click(function(){

	event.preventDefault(); 

	user = $('#username').val();
	message = $('#message').val();

	var obj = {
		user: user,
		message: message
	} 

	$.post(url, obj, function(data, status){
		console.log('yay');
	 }).fail(function(data){
	 	console.log('not working');
	 })

	messageData();

	$('input[type=text]').val('');  
	$('textarea[type=text]').val('');  

})

	