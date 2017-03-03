$(function() {
        if (window.localStorage) {
          var email = localStorage.getItem("email");
          $('#userName').html('<span class="glyphicon glyphicon-user"></span> ' + email);
          $('#email').html('Email: ' + email);
        }
         
});