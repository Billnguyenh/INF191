$(function() {
        if (window.localStorage) {
          var email = localStorage.getItem("email");
          var firstName = localStorage.getItem('firstName');
          var lastName = localStorage.getItem('lastName');
          var department = localStorage.getItem('department');
          var position = localStorage.getItem('position');
          var uciNetId = localStorage.getItem('uciNetId');
          $('#userName').html('<span class="glyphicon glyphicon-user"></span> ' + email);
          $('#profileInfo').append("<p>First Name: " + firstName + "</p>"
          	+ "<p>Last Name: " + lastName + "</p>" +
          	"<p>UCINetId: " + uciNetId+ "</p>" +
          	"<p>Email: " + email + "</p>" +
          	"<p>Department: " + department + "</p>" +
          	"<p>Position: " + position + "</p>");
        }
         
});