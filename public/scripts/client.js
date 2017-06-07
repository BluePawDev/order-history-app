console.log('JavaScript sourced');

$(onReady);

function onReady() {
	listCustomers();

}

function listCustomers() {
	// get customers from DB
	$.ajax({
		url: '/customers',
		type: 'GET',
		success: function(response) {
			for (var i = 0; i < response.length; i++) {
				var custName = response[i].first_name + ' ' + response[i].last_name;
				var $tr = $('<button id="cmdBtn' + [i] + '" type="button" name="button">Orders</button><tr id="' + [i] + '"><td> ' + custName + '</td></tr><br>');
				$('#tblRow').append($tr);
				console.log(response[i]);


			}

		}
	})


	// add button to each


	// append to DOM

}

function getOrders() {
	// get orders from DB by customer

}
