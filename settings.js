$(function() {
        if (window.localStorage) {
          var userObject = JSON.parse(localStorage.getItem("userObject"));
          $('#userName').html('<span class="glyphicon glyphicon-user"></span> ' + userObject.username);
          $('#profileInfo').append("<p><b>First Name:</b>  " + userObject.first_name + "</p>"
            + "<p><b>Last Name:</b>  " + userObject.last_name + "</p>" +
            "<p><b>Username:</b>  " + userObject.username+ "</p>" +
            "<p><b>Email:</b>  " + userObject.email + "</p>" +
            "<p><b>Department:</b>  " + userObject.department_id + "</p>" +
            "<p><b>Position:</b>  " + userObject.position + "</p>");
        }
         
});