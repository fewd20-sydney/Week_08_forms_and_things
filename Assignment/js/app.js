var state = ["NSW","VIC","QLD","SA","WA","NT","TAS"];
var option;
var username, password, firstname, surname, address, stateSel, postcode, telephone, email;
var validForm = false;

$(document).ready(function(){
    for (var i=0; i<state.length; i++){
       option = '<option value="'+state[i]+'">'+state[i]+'</option>';
       $('#state').append(option);
    }
})

$('#signup').submit(function(){
	event.preventDefault();
	username = $('#username').val();
	password = $('#password').val();
	firstname = $('#firstname').val();
	surname = $('#surname').val();
	address = $('#address').val();
	stateSel = $('#state').val();
	postcode = $('#postcode').val();
	telephone = $('#telephone').val();
	email = $('#email').val();

	if (username === "") {
		alert('You must enter in a valid username.');
	} else if (password === "") {
		alert('You must enter in a valid password.');
	} else if (firstname === "") {
		alert('You must enter in your first name.');
	} else if (surname === "") {
		alert('You must enter in your last name.');
	} else if (address === "") {
		alert('You must enter in your address.');
	} else if (stateSel === "Select State") {
		alert('You must select your state.');
	} else if (postcode === "") {
		alert('You must enter in your postcode');
	} else if (telephone === "") {
		alert('You must enter in your telephone.');
	} else if (email === "") {
		alert('You must enter in your email.');
	} else {
		validForm = true;
	}

	if (validForm) {
		$('#signup').hide();
		$('#successful').show();
	}
})