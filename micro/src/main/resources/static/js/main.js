/**
 * 
 */
/*$(document).ready(function(){
	var page = new Page();
	page.init();
});

/*function Page(){
	this.name = prompt("Enter account Number:");
}

function addAllColumnHeaders(myList, selector) {
	  var columnSet = [];
	  var headerTr$ = $('<tr/>');

	  for (var i = 0; i < myList.length; i++) {
	    var rowHash = myList[i];
	    for (var key in rowHash) {
	      if ($.inArray(key, columnSet) == -1) {
	        columnSet.push(key);
	        headerTr$.append($('<th/>').html(key));
	      }
	    }
	  }
	  $(selector).append(headerTr$);
	  
	  return columnSet;
}

Page.prototype.init = function(){
	this.bind();
}

Page.prototype.bind = function(){
	this.bindNavigation();
}*/

/*Page.prototype.bindNavigation = function(){
	var that = this;
	function addAllColumnHeaders(myList, selector) {
		  var columnSet = [];
		  var headerTr$ = $('<tr/>');

		  for (var i = 0; i < myList.length; i++) {
		    var rowHash = myList[i];
		    for (var key in rowHash) {
		      if ($.inArray(key, columnSet) == -1) {
		        columnSet.push(key);
		        headerTr$.append($('<th/>').html(key));
		      }
		    }
		  }
		  $(selector).append(headerTr$);
		  
		  return columnSet;
	}
*/
	
	function search(){
		//searchMsisdn
		
		$.get("http://localhost:4001/releatedaccounts/"+$("#searchMsisdn").val(), function(data){
			$("#msisdnRelated").val(data.MSISDN);
			$("#packageRelated").val(data.Package);
			$("#planRelated").val(data.Plan);
			$("#childMmsisdnRelated").val(data.ChildMSISDN);
			$("#emailRelated").val(data.Email);
			$("#statusRelated").val(data.Status);
			$("#dueAmount").val(data.BillDueAmount);
			$("#balanceRelated").val(data.Balance);
			
		});
		
		$.get("http://localhost:4001/account/"+$("#searchMsisdn").val(), function(data){
			$("#msisdnAccount").val(data.MSISDN);
			$("#statusAccount").val(data.Status);
			$("#package").val(data.Package);
			$("#serviceNo").val(data.ServiceAccountNumber);
			$("#billingNumber").val(data.BillingNumber);
			$("#billPreference").val(data.BillPreference);
			$("#vanity").val(data.Vanity);			
		});
		
		$.get("http://localhost:4001/contact/"+$("#searchMsisdn").val(), function(data){
			
	$("#name").val(data.name);
	$("#dob").val(data.DOB);
	$("#nationality").val(data.nationality);
	$("#occupation").val(data.occupation);
	$("#gender").val(data.gender);
	$("#type").val(data.type);
	$("#street").val(data.StreetAddress);
	$("#postBox").val(data.postBox);
	$("#email").val(data.emailAddress);
	$("#mobile").val(data.mobileNumber);
	$("#city").val(data.city);
	$("#msisdn").val(data.msisdn);
	$("#port").val(data.port);
	$("#textMessage").val(data.text);
	
		});
		
	}

