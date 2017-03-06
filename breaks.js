/*
SQL Table Schema
Name
Category
OR#(s)
TimeStamp
Type: queue, break
*/

var testJson =
[
  {
    "name": "Sam Applebaum",
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
    "name": "Dr. Diddy Ries",
    "category": "Attending",
    "ornum": "4",
    "timestamp": "2017, 02, 27, 00, 00, 00",
    "type": "break"
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

    return "00:00"; //CHANGE
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
    return "00:00:00"; //CHANGE
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
    "<tr class='break-item'> " +
      "<td>" + name + "</td> " +
      "<td>" + category + "</td> " +
      "<td>" + ornum +"</td> " +
      "<td>" + waitTime + "</td> " +
    "</tr> "
  )
}
function appendSelfRequestBreak(requestBreak, index) {
  name = requestBreak.getName();
  category = requestBreak.getCategory();
  ornum = requestBreak.getOrNum();
  waitTime = requestBreak.getWaiting();
  $('#queue').append("" +
    "<tr class='break-item success'> " +
      "<td>" + name + "</td> " +
      "<td>" + category + "</td> " +
      "<td>" + ornum +"</td> " +
      "<td>" + waitTime + "</td> " +
    "</tr> "
  )
}

function appendOnBreak(onBreak, index) {
  name = onBreak.getName();
  category = onBreak.getCategory();
  ornum = onBreak.getOrNum();
  elapsed = onBreak.getTimeElapsed();
  $('#on-break').append("" +
    "<tr class='break-item'> " +
      "<td>" + name + "</td> " +
      "<td>" + category + "</td> " +
      "<td>" + ornum +"</td> " +
      "<td>" + elapsed + "</td> " +
    "</tr> "
  )
}

function appendSelfOnBreak(onBreak, index) {
  name = onBreak.getName();
  category = onBreak.getCategory();
  ornum = onBreak.getOrNum();
  elapsed = onBreak.getTimeElapsed();
  $('#on-break').append("" +
    "<tr class='break-item success'> " +
      "<td>" + name + "</td> " +
      "<td>" + category + "</td> " +
      "<td>" + ornum +"</td> " +
      "<td>" + elapsed + "</td> " +
    "</tr> "
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
    if (current.type === "break") {
      onBreak[index] = new OnBreak (current.name, current.category, current.ornum, current.timestamp)
      index++;
    }
  }
  return onBreak;
}

function printRequestQueue(array, user_self) {
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].getName() === user_self){
      appendSelfRequestBreak(array[i], index);
    }
    else {
      appendRequestBreak(array[i], index);
    }
    index++;
  }
}

function printOnBreak(array, user_self) {
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].getName() === user_self) {
      appendSelfOnBreak(array[i], index);
    }
    else {
      appendOnBreak(array[i], index);
    }
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
   '<tr>'+
    '<th>Name</th>'+
    '<th>Category</th>'+
    '<th>OR Room</th>'+
    '<th>Waiting</th>'+
  '</tr>'
  )
}

//Front end only
function eraseOnBreak() {
  $("#on-break").empty();
  $("#on-break").append("" +
    '<tr>'+
     '<th>Name</th>'+
     '<th>Category</th>'+
     '<th>OR Room</th>'+
     '<th>Time Elapsed</th>'+
   '</tr>'
  )
}


$(document).ready(function() {
  //Current User Data from Local Storage
  //Hi Janay: the following group of variables need to be pulled from
  //          the user database or local storage.
  var user_self = "Sam Applebaum";
  var category_self = "Attending";
  var task_self = "2,3,5";
  var current_timeStamp = $.now();
  var is_floater = false;


  //Arrays of Break Items
  //Hi Janay: testJson is the parsed string version of the json file
  //          used (located at the top of this code). Needs to be actual
  //          json pulled from database.
  var requestQueue = buildRequestQueue(testJson);
  var onBreak = buildOnBreak(testJson);

  //Check current status of user
  var inQueueID = checkSelfQueueID(requestQueue, user_self);
  var onBreakID = checkOnBreakID(onBreak, user_self);

  setBtnStates(inQueueID, onBreakID);

  //Set button values

  //print from JSON, LOAD PAGE
  printRequestQueue(requestQueue, user_self);
  printOnBreak(onBreak, user_self);
  var date = new Date();

  //REQUEST BREAK BUTTON FUNCTION
  $("#request-break-btn").click(function() {
    if (inQueueID === null && onBreakID === null) {
      //If user isn't inQueue or onBreak, add them to inQueue
      var reqBreak = new RequestBreak(user_self, category_self, task_self, current_timeStamp);
      requestQueue.push(reqBreak)
      //Hi Janay: add object in SQL database. Object will be
      //          name: user_self
      //          category: category_self
      //          ornum: task_self
      //          timestamp: current_timeStamp (this is the timestamp of when request/break item is created)
      //          type: queue

      eraseSelfQueue();
      printRequestQueue(requestQueue, user_self);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      setBtnStates(inQueueID, onBreakID);

    }
    else if (inQueueID != null) {
      //if user is inQueue, Cancel break request (take them off list)
      requestQueue.splice(inQueueID, 1);
      //Hi Janay: queue object for user_self should exist in the database. Remove it
      //          useful logic would be to remove item if
      //          if (name == name_self && category == category_self)
      //              remove(break item)

      eraseSelfQueue();
      printRequestQueue(requestQueue, user_self);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
  });

  //SELF BREAK BUTTON FUNCTION
  $("#self-break-btn").click(function() {
    if (onBreakID === null && inQueueID === null) {
      //If user isn't inQueue or onBreak, add them to onBreak
      var takeBreak = new OnBreak(user_self, category_self, task_self, current_timeStamp);
      onBreak.push(takeBreak);
      //Hi Janay: add break object in SQL database. Object will be
      //          name: user_self
      //          category: category_self
      //          ornum: task_self
      //          timestamp: current_timeStamp (this is the timestamp of when request/break item is created)
      //          type: break
      //              (this will be the same code as the first database add. Only "type" value is different)

      eraseOnBreak();
      printOnBreak(onBreak, user_self);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
    else if (onBreakID === null && inQueueID != null) {
      //if user is inQueue, move them to onBreak
      requestQueue.splice(inQueueID, 1);
      var takeBreak = new OnBreak(user_self, category_self, task_self, current_timeStamp);
      onBreak.push(takeBreak);
      //Hi Janay: queue object should exist in database. Remove it and add a new break object
      //          useful logic would be to remove item if
      //          if (name == name_self && category == category_self && type == queue)
      //              remove(break item)
      //
      //then      Add break object in Database
      //          name: user_self
      //          category: category_self
      //          ornum: task_self
      //          timestamp: current_timeStamp (this is the timestamp of when request/break item is created)
      //          type: break

      eraseSelfQueue();
      eraseOnBreak();
      printRequestQueue(requestQueue, user_self);
      printOnBreak(onBreak, user_self);
      inQueueID = checkSelfQueueID(requestQueue, user_self);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
    else if (onBreakID != null) {
      //if self_user is currently onBreak
      onBreak.splice(onBreakID, 1);
      //Hi Janay: add object in SQL database. Object will be
      //          name: user_self
      //          category: category_self
      //          ornum: task_self
      //          timestamp: current_timeStamp (this is the timestamp of when request/break item is created)
      //          type: break

      eraseOnBreak();
      printOnBreak(onBreak, user_self);
      onBreakID = checkOnBreakID(onBreak, user_self);
      setBtnStates(inQueueID, onBreakID);
    }
  });
});