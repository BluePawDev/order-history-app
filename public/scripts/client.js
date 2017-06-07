console.log('JavaScript sourced');

$(onReady);

function onReady() {
	listCustomers();
	$('#custTbl').on('click', '#cmdBtn', getOrders)

}

function listCustomers() {
	// get customers from DB
	$.ajax({
		url: '/customers',
		type: 'GET',
		success: function(response) {
			for (var i = 0; i < response.length; i++) {
				var first = response[i].first_name;
				var last = response[i].last_name;
				var id = response[i].id;
				var custName = first + ' ' + last;
				var $custTr = $('<tr id="' + id + '"><td> ' + custName + '</td></tr>')
				$($custTr).prepend('<button id="cmdBtn" type="button" name="button">Orders</button>')
				$('#tblRow').prepend($custTr);
			}
		}
	})
}

function getOrders() {
	// get orders from DB by customer
	var id = $(this).parent().attr('id');
	var custID = {
		id: id
	}
	$.ajax({
		url: '/orders',
		type: 'PUT',
		data: custID,
		success: function(response) {
			for (var i = 0; i < response.length; i++) {
				var res = response[i];
				var address = res.street;
				var cityEtAl = res.city + ', ' + res.state + ' ' + res.zip;
				var item = res.description;
				var qty = res.quantity;
				var price = res.unit_price;
				var ordNum = res.id;
				var lineTotal = ((qty * price).toPrecision(2));

				$('#orders').append('Order #: ', ordNum);
				$('#orders').append('<br> Shipped to: ' + address + ', ' + cityEtAl);

				$('#orders').append('<br><br>' +
					qty + ' ' + item + '  at $' + price + ' each for $' + lineTotal);
			}



			console.log(response);
		}

	})
}
