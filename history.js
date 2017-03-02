var data = JSON.parse(localStorage.getItem("historyData"));


$(function () {
    $('#table').bootstrapTable({
        data: data
    });
});