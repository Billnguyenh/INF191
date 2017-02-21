/*
SQL Table Schema
Name
Category
OR#(s)
TimeStamp
*/

function RequestBreak (name, category, ornum, timestamp) {
  this.name = name;
  this.category = category;
  this.ornum = ornum;
  this.timeStamp = timestamp;

  this.getName = function () {
    return this.name;
  }
  this.getCategory = function () {
    return this.category;
  }
  this.getOrNum = function() {
    return ornum;
  }
  this.getWaiting = function() {
    return "Currently N/A";
  }
}

function TakeBreak (name, category, ornum, timestamp) {
  this.name = name;
  this.category = category;
  this.ornum = [ornum];
  this.timeStamp = timestamp;

  this.getName = function () {
    return this.name;
  }
  this.getCategory = function () {
    return this.category;
  }
  this.getOrNum = function() {
    return ornum;
  }
  this.getTimeElapsed = function() {
    return "Currently N/A";
  }
}

function appendRequestBreak(requestBreak, index) {
  name = requestBreak.getName();
  category = requestBreak.getCategory();
  ornum = requestBreak.getOrNum();
  waitTime = requestBreak.getWaiting();
  $('#queue').append("" +
    "<div id='break-request-" + index + "'class='break-item'> " +
      "<div class='break-item-info'> " +
        "<p>" + name + "</p> " +
        "<p>" + category + "</p> " +
      "</div> " +
      "<div class='break-item-info'> " +
        "<p>Task: OR " + ornum +"</p> " +
        "<p>Waiting: " + waitTime + "</p> " +
      "</div> " +
      "<div class='break-item-info'> " +
        "<p> </p> " +
        "<button class='relieve-btn' value='break-request-" + index + "' type='button'>Relieve</button> " +
      "</div> " +
    "</div> "
  )
}

function appendTakeBreak(takeBreak, index) {
  name = requestBreak.getName();
  category = requestBreak.getCategory();
  ornum = requestBreak.getOrNum();
  elapsed = requestBreak.getTimeElapsed();
  $('#on-break').append("" +
    "<div id='break-request-" + index + "'class='break-item'> " +
      "<div class='break-item-info'> " +
        "<p>" + name + "</p> " +
        "<p>" + category + "</p> " +
      "</div> " +
      "<div class='break-item-info'> " +
        "<p>Task: OR " + ornum +"</p> " +
        "<p>Waiting: " + elapsed + "</p> " +
      "</div> " +
      "<div class='break-item-info'> " +
        "<p> </p> " +
        "<button class='relieve-btn' value='break-request-" + index + "' type='button'>End Break</button> " +
      "</div> " +
    "</div> "
  )
}


$(document).ready(function() {
  //Current User Data from Local Storage
  var user_self = "Bill Nguyen";
  var category_self = "Attending";
  var task_self = "2,3,5";
  var current_timeStamp = $.now();

  var breakRequestQueue = [];
  var queueIndex = 0;

  $("#request-break-btn").click(function() {
    var reqBreak = new RequestBreak(user_self, category_self, task_self, current_timeStamp);
    breakRequestQueue.push(reqBreak)
    appendRequestBreak(reqBreak, queueIndex);
    queueIndex++;
  });

  $(document).on('click', '.relieve-btn', function() {
    var breakItemClicked = $(this).attr("value");
    $("#"+breakItemClicked).remove();
    //ADD On Break Item
  });

});
