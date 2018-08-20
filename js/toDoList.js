$(document).ready(function() {
	$("#add").click(function() {
		var newListItems = $("#addtoList").val();
		if (newListItems.length > 0){
			$("#todoList").append("<li>" + newListItems + "</li>");
			$("#addtoList").val('');
		}
	});
});
