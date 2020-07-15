var table;
var urlUsers = "https://jsonplaceholder.typicode.com/users";
function initTableData() {
    //Data from an URL ?
    $.get(urlUsers, function(responseData) {
    	//Mofify "responseData" before showing ?
    	var modifiedUsers = responseData.map(eachUser => {
    		return {
    			id: eachUser.id,
    			name: eachUser.name,
  				email: eachUser.email,
  				address: `${eachUser.address.street}, ${eachUser.address.suite}, ${eachUser.address.city}`,
  				phone: eachUser.phone
    		};
    	});
    table = $('#users').DataTable({
    	"processing": true,
    	data: modifiedUsers,
    	columns:[
    		{ data: 'id' },		
    		{ data: 'name' },
    		{ data: 'email' },
    		{ data: 'address' },
    		{ data: 'phone' }
    	]
    	});
    }).fail(function() {
    	alert( "Cannot get data from URL !!!" );
    });
}

$(document).ready(function (){
	initTableData();
	$("#list-header").on({
		mouseenter: function() {
			$(this).css("background-color", "gray");
		},
		mouseleave: function(){
        	$(this).css("background-color", "rgb(202, 114, 13)");
    	}, 
	});
	$("#btnReloadData").on("click", function(){
		alert("Do you want to reload data ?")
		table.ajax.reload();
	});
});




