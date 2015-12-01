var obj = {
	data: {
		user:'Yang',
		message: 'Woot my first message!',
	}
}

var url = 'https://fewd20.herokuapp.com/chat';

var usedNames= [];

$(document).ready(function(){
	$.get(url, function(data, status){

		for(var i=0; i< data.length; i++){

			if (usedNames.indexOf(data[i].name) === -1){
				usedNames.push(data[i].name);
				$('#printname').append(data[i].user);
				$('#printmessage').append(data[i].message);
			}
		}
	}).fail(function(){

	});
})

$('#send').click(function(){
	$.post(url, obj, function(data, status){
		console.log(data)
		$('#printname').append(data[i].user);
		$('#printmessage').append(data[i].message);
	}).fail(function(data, status){
		console.log(data)
		$('#error').show('this is an error');
	})
});





//MARCHE PAS DU TOUT

//var obj = {
//	data: {
//    	user: 'Yang',
 //   	message: 'Woot my first message!'
//	}
//}

//var url = 'https://fewd20.herokuapp.com/chat';


//$('#send').click(function(){
//	$.get(url, function(data, status){
//            $('#printname').append(data.user);
//			$('#printmessage').append(data.message);
 //   });
//})



//MARCHE


//var obj = {
//	data: {
//		user:'Yang',
//		message: 'Woot my first message!',
//	}
//}

//var url = 'https://fewd20.herokuapp.com/chat';

//var usedNames= [];

//$('#send').click(function(){
//	$.get(url, function(data, status){

//		for(var i=0; i< data.length; i++){

//			if (usedNames.indexOf(data[i].name) === -1){
//				usedNames.push(data[i].name);
//				$('#printname').append(data[i].user);
//				$('#printmessage').append(data[i].message);
//			}
//		}
//	}).fail(function(){

//	});
//})
