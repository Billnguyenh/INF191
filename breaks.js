/*
SQL Table Schema
Name
Category
OR#(s)
TimeStamp
Type: queue, onbreak
*/

var testJson =
[
  {
    "name": "Dr. Samantha",
    "category": "Attending",
    "ornum": "1,2,3",
    "timestamp": "2017, 02, 27, 00, 00, 00",
    "type": "queue"
  },
  {
    "name": "Bill Nguyen",
    "category": "Resident",
    "ornum": "9",
    "timestamp": "2017, 02, 27, 00, 00, 00",
    "type": "queue"
  },
  {
    "name": "Dr. Janay",
    "category": "Attending",
    "ornum": "4",
    "timestamp": "2017, 02, 27, 00, 00, 00",
    "type": "queue"
  },
  {
  "name": "Dr. Kush",
  "category": "Attending",
  "ornum": "7",
  "timestamp": "2017, 02, 27, 00, 00, 00",
  "type": "onbreak"
  }
]


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
    return this.ornum;
  }
  this.getWaiting = function() {

    return "Currently N/A";
  }
}

function OnBreak (name, category, ornum, timestamp) {
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
    return this.ornum;
  }
  this.getTimeElapsed = function() {
    return "Currently N/A";
  }
  this.print = function () {
    return "name: " + this.name + " for OR " + this.ornum;
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
        "<button class='relieve-btn' value='" + index + "' type='button'>Relieve</button> " +
      "</div> " +
    "</div> "
  )
}

function appendOnBreak(onBreak, index) {
  name = onBreak.getName();
  category = onBreak.getCategory();
  ornum = onBreak.getOrNum();
  elapsed = onBreak.getTimeElapsed();
  $('#on-break').append("" +
    "<div id='on-break-" + index + "'class='break-item'> " +
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
        //"<button value='" + index + "' type='button'>End Break</button> " +
      "</div> " +
    "</div> "
  )
}

function buildRequestQueue(jsonStr) {
  var requestQueue = [];
  var index = 0;
  for (i = 0; i < jsonStr.length; i++) {
    var current = jsonStr[i];
    if (current.type === "queue") {
      requestQueue[index] = new RequestBreak (current.name, current.category, current.ornum, current.timestamp)
      index++;
    }
  }
  return requestQueue;
}

function buildOnBreak(jsonStr) {
  var onBreak = [];
  var index = 0;
  for (i = 0; i < jsonStr.length; i++) {
    var current = jsonStr[i];
    if (current.type === "onbreak") {
      onBreak[index] = new OnBreak (current.name, current.category, current.ornum, current.timestamp)
      index++;
    }
  }
  return onBreak;
}

function printRequestQueue(array) {
  var index = 0;
  for (i = 0; i < array.length; i++) {
    appendRequestBreak(array[i], index);
    index++;
  }
}

function printOnBreak(array) {
  var index = 0;
  for (i = 0; i < array.length; i++) {
    appendOnBreak(array[i], index);
    index++;

  }
}


function setBtnStates (inQueueID, onBreakID) {
  var requestBtn = $("#request-break-btn");
  if (inQueueID === null) {
    requestBtn.text(requestBtn.data("text-original"));
  }
  else if (inQueueID != null) {
    requestBtn.data("text-original", requestBtn.text());
    requestBtn.text(requestBtn.data("text-swap"));
  }

  var selfBreakBtn = $("#self-break-btn");
  if (onBreakID === null) {
    selfBreakBtn.text(selfBreakBtn.data("text-original"));
  }
  else if (onBreakID != null) {
    selfBreakBtn.data("text-original", selfBreakBtn.text());
    selfBreakBtn.text(selfBreakBtn.data("text-swap"));
  }

}

//Checks all SelfQueue items in array, if user_self is in queue, returns Index of break item
function checkSelfQueueID (array, user_self) {
  for (i = 0; i < array.length; i++) {
    var current = array[i];
    if (current.getName().valueOf() === user_self.valueOf()){
      return i;
    }
  }
  return null;
}

function checkOnBreakID (array, user_self) {
  for (i = 0; i < array.length; i++) {
    var current = array[i];
    if (current.getName().valueOf() === user_self.valueOf()){
      return i;
    }
  }
  return null;
}

//Front end only
function eraseSelfQueue() {
  $("#queue").empty();
  $("#queue").append("" +
    "<div id='queue-title' class='row'>" +
        "<h2>Break Request Queue</h2>" +
    "</div>"
  )
}

//Front end only
function eraseOnBreak() {
  $("#on-break").empty();
  $("#on-break").append("" +
    "<div id='on-break-title' class='row'>" +
        "<h2>On Break</h2>" +
    "</div>"
  )
}


$(document).ready(function() {
  //Current User Data from Local Storage
  var user_self = "Bill Nguyen";
  var category_self = "Attending";
  var task_self = "2,3,5";
  var current_timeStamp = $.now();
  var is_floater = false;

  //Arrays of Break Items
  var requestQueue = buildRequestQueue(testJson);
  var onBreak = buildOnBreak(testJson);

  //Check current status of user
  var inQueueID = checkSelfQueueID(requestQueue, user_self);
  var onBreakID = checkOnBreakID(onBreak, user_self);

  setBtnStates(inQueueID, onBreakID);

  //Set button values

  //print from JSON, LOAD PAGE
  printRequestQueue(requestQueue);
  printOnBreak(onBreak);
  var date = new Date();

  //REQUEST BREAK BUTTON FUNCTION
  $("#request-break-btn").click(function() {
    if (inQueueID === null && onBreakID === null) {
      var reqBreak = new RequestBreak(user_self, category_self, task_self, current_timeStamp);
      requestQueue.push(reqBreak)

      eraseSelfQueue();
      printRequestQueue(requestQueue);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
    else if (inQueueID != null) {
      requestQueue.splice(inQueueID, 1);

      eraseSelfQueue();
      printRequestQueue(requestQueue);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
  });

  //SELF BREAK BUTTON FUNCTION
  $("#self-break-btn").click(function() {
    if (onBreakID === null && inQueueID === null) {
      var takeBreak = new OnBreak(user_self, category_self, task_self, current_timeStamp);
      onBreak.push(takeBreak);

      eraseOnBreak();
      printOnBreak(onBreak);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
    else if (onBreakID === null && inQueueID != null) {
      requestQueue.splice(inQueueID, 1);
      var takeBreak = new OnBreak(user_self, category_self, task_self, current_timeStamp);
      onBreak.push(takeBreak);

      eraseSelfQueue();
      eraseOnBreak();
      printRequestQueue(requestQueue);
      printOnBreak(onBreak);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
    else if (onBreakID != null) {
      onBreak.splice(onBreakID, 1);

      eraseOnBreak();
      printOnBreak(onBreak);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
  });

  //RELIEVE FUNCTION FOR FLOATERS ONLY
  $(document).on('click', '.relieve-btn', function() {
    var index = parseInt($(this).attr("value"));
    requestQueue.splice(index, 1);

    eraseSelfQueue();
    printRequestQueue(requestQueue);
    inQueueID = checkSelfQueueID(requestQueue, user_self);
    setBtnStates(inQueueID);
  });

});
