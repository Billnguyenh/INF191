var data = JSON.parse(localStorage.getItem("historyData"));


$(function () {
    $('#table').bootstrapTable({
        data: data
    });
});

if (window.localStorage) {
  var userObject = JSON.parse(localStorage.getItem("userObject"));
  $('#userName').html('<span class="glyphicon glyphicon-user"></span> ' + userObject.username);

}
