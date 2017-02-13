//Pull JSON Data from All System Activities
/*
Database Structure for System Activities JSON File
 - Sender
 - receiver
 - Type:
     (Announcement, TaskAssignment, TaskCompleted, MeetingRequest, MeetingApproved, Break)
 - Freetext:
 - Status
     (in-progress, complete, pending, approved, denied)
 - Timestamp
 - OR#
 - Location
 - Start Time
 - End Time
 - priority
    (low, medium high)

*/
var testJson =
[
  {
    "sender": "Dr. Rajan",
    "receiver": "Bill",
    "type": "Announcement",
    "freetext": "Free bagels in the breakroom!",
    "status": "null",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "null",
    "location": "null",
    "starttime": "null",
    "endtime": "null",
    "priority": "null"
  },
  {
    "sender": "Dr. Rajan",
    "receiver": "Bill",
    "type": "TaskAssignment",
    "freetext": "null",
    "status": "in-progress",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "5",
    "location": "null",
    "starttime": "null",
    "endtime": "null",
    "priority": "null"
  },
  {
    "sender": "Dr. Rajan",
    "receiver": "Bill",
    "type": "TaskAssignment",
    "freetext": "null",
    "status": "complete",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "12",
    "location": "null",
    "starttime": "null",
    "endtime": "null",
    "priority": "null"
  },
  {
    "sender": "Bill",
    "receiver": "Dr. Rajan",
    "type": "TaskCompleted",
    "freetext": "null",
    "status": "null",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "8",
    "location": "null",
    "starttime": "null",
    "endtime": "null",
    "priority": "null"
  },
  {
    "sender": "Bill",
    "receiver": "Dr. Rajan",
    "type": "MeetingRequest",
    "freetext": "I have to meet with residents for training",
    "status": "pending",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "null",
    "location": "East Building",
    "starttime": "1:00pm",
    "endtime": "1:30pm",
    "priority": "medium"
  },
  {
    "sender": "Bill",
    "receiver": "Dr. Rajan",
    "type": "MeetingRequest",
    "freetext": "I have to meet with residents for training",
    "status": "approved",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "null",
    "location": "East Building",
    "starttime": "1:00pm",
    "endtime": "1:30pm",
    "priority": "medium"
  },
  {
    "sender": "Bill",
    "receiver": "Dr. Rajan",
    "type": "MeetingRequest",
    "freetext": "I have to meet with residents for training",
    "status": "denied",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "null",
    "location": "East Building",
    "starttime": "1:00pm",
    "endtime": "1:30pm",
    "priority": "medium"
  },
  {
    "sender": "Dr. Rajan",
    "receiver": "Bill",
    "type": "MeetingApproved",
    "freetext": "I have to meet with residents for training",
    "status": "denied",
    "timestamp": "2017-01-28 11:00:21",
    "ornumber": "null",
    "location": "East Building",
    "starttime": "1:00pm",
    "endtime": "1:30pm",
    "priority": "medium"
  }
]
// ----OBJECT LIBRARY -----
// Intitializing parameters are pulled directly from SQL database?

//Shows on both User and Admin
function Announcement (sender, freetext, timeStamp) {
  this.sender = sender;
  this.freetext = freetext;
  this.timeStamp = timeStamp;

  this.getTimeStamp = function () {
    return this.timeStamp;
  }
  this.getHeader = function() {
    return this.freetext;
  };
  this.getDescription = function () {
    return "announcement written by " + this.sender;
  };
}

//Shows on only User Screens
function TaskAssignment (sender, status, timeStamp, orNum) {
  this.sender = sender;
  this.timeStamp = timeStamp;
  this.orNum = orNum;
  this.status = status;

  this.getStatus = function () {
    return this.status;
  }
  this.getOrNum = function () {
    return this.orNum;
  }
  this.getTimeStamp = function () {
    return this.timeStamp;
  }
  this.getHeader = function() {
    return this.sender + " has assigned you to OR" + this.orNum;
  };
  this.getDescription = function () {
    return "Status: " + this.status;
  };
}


function MeetingApproved (sender, freetext, timestamp, location, starttime, endtime, priority) {
  this.sender = sender;
  this.freeText = freetext;
  this.timeStamp = timestamp;
  this.location = location;
  this.startTime = starttime;
  this.endTime = endtime;
  this.priority = priority;

  this.getSender = function() {
    return this.sender;
  }
  this.getTimeStamp = function () {
    return this.timeStamp;
  }
  this.getHeader = function() {
    return this.sender + " has approved your meeting request";
  }
  this.getDescription = function () {
    return "Priority: " + this.priority +"</br>" +
          "Location: " + this.location + "</br>" +
          this.startTime + " to " + this.endTime + "</br>" +
          "Additional notes: </br>" + this.freeText;
  };
}


//Shows on only Admin Screens
function TaskCompleted (sender, timeStamp, orNum) {
  this.sender = sender;
  this.timeStamp = timeStamp;
  this.orNum = orNum;

  this.getTimeStamp = function () {
    return this.timeStamp;
  }
  this.getOrNum = function () {
    return this.orNum;
  }
  this.getHeader = function() {
    return this.sender + " has completed their task in OR" + this.orNum;
  };
  this.getDescription = function () {
    return "DEV NOTE: description to be determined";
  };

}

function MeetingRequest (sender, freetext, status, timestamp, location, starttime, endtime, priority) {
  this.sender = sender;
  this.freeText = freetext;
  this.status = status;
  this.timeStamp = timestamp;
  this.location = location;
  this.startTime = starttime;
  this.endTime = endtime;
  this.priority = priority;

  this.getSender = function() {
    return this.sender;
  }
  this.getTimeStamp = function () {
    return this.timeStamp;
  }
  this.getStatus = function() {
    return this.status;
  }
  this.getHeader = function() {
    if (this.status === "pending") {
      return this.sender + " has requested to attend a meeting";
    }
    else if (this.status === "approved") {
      return "You have approved " + this.sender + "'s meeting request";
    }
    else if (this.status === "denied") {
      return "You have denied " + this.sender + "'s meeting request";
    }
  };
  this.getDescription = function () {
    return "Priority: " + this.priority +"</br>" +
          "Location: " + this.location + "</br>" +
          this.startTime + " to " + this.endTime + "</br>" +
          "Status: " + this.status +"</br>" +
          "Additional notes: </br>" + this.freeText;
  };
  function approve() {
    this.status = "approved";
  }
  function deny() {
    this.status = "denied";
  }
  function pending() {
    this.status = "pending";
  }
}

function Break (sender, action, timeStamp) {

}

// --------- CONSTRUCT OBJECTS IN DOM - PRESENT UI -----------


function appendAnnouncement (announcement, index) {
  var header = announcement.getHeader();
  var timeStamp = announcement.getTimeStamp();
  var description = announcement.getDescription();
  $(".announceFeed").prepend(''+
    '<div class="row well notification">'+
      '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
        '<span class="glyphicon glyphicon-bullhorn"></span>'+
      '</div>'+
      '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">'+

        '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+

        '<div id="description-'+ index + '" class="description collapse">'+
          '<p>Details of the notification here'+
          '</br></br></br>' + description +
          '</p>'+
        '</div>'+
        '<p class="timeStamp">' + timeStamp + '</p>'+
      '</div>'+
    '</div>'
    );
}

function appendTaskAssignment(taskAssignment, index) {
  var header = taskAssignment.getHeader();
  var timeStamp = taskAssignment.getTimeStamp();
  var description = taskAssignment.getDescription();
  var status = taskAssignment.getStatus();
  if (status === "in-progress") {
    $(".announceFeed").prepend(''+
      '<div class="row well notification">'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-sort"></span>'+
        '</div>'+
        '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">'+
          '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
          '<div id="description-' + index + '" class="description collapse">'+
            '<p>'+ description +
            '</p>'+
          '</div>'+
            '<p class="timeStamp">' + timeStamp + '</p>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<button type="button" class="btn btn-outline-success btn-sm">'+
            '<span class="glyphicon glyphicon-unchecked"></span>'+
          '</button>'+
        '</div>'+

      '</div>'
      );
  }
  else if (status === "complete") {
    $(".announceFeed").prepend(''+
      '<div class="row well notification">'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-sort"></span>'+
        '</div>'+
        '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">'+
          '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
          '<div id="description-' + index + '" class="description collapse">'+
            '<p>Details of the notification here'+
              '</br></br></br>'+ description +
            '</p>'+
          '</div>'+
            '<p class="timeStamp">' + timeStamp + '</p>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-check"></span>'+
        '</div>'+
      '</div>'
      );
  }
  else {
    alert("Error: Status value of notification object must be [in-progress, complete]");
  }

}

//Admin View Only
function appendTaskCompleted (taskCompleted, index) {
  var header = taskCompleted.getHeader();
  var timeStamp = taskCompleted.getTimeStamp();
  var description = taskCompleted.getDescription();
  $(".announceFeed").prepend(''+
    '<div class="row well notification">'+
      '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
        '<span class="glyphicon glyphicon-bell"></span>'+
      '</div>'+
      '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">'+
        '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header +'</a></p>'+
        '<div id="description-' + index + '" class="description collapse">'+
          '<p>' + description +
          '</p>'+
        '</div>'+
        '<p class="timeStamp">' + timeStamp + '</p>'+
      '</div>'+
    '</div>'
  )
}



//Admin View Only
function appendMeetingRequest (meetingRequest, index) {
  var header = meetingRequest.getHeader();
  var timeStamp = meetingRequest.getTimeStamp();
  var description = meetingRequest.getDescription();
  var status = meetingRequest.getStatus();
  if (status === "approved") {
    $(".announceFeed").prepend(''+
      '<div class="row well notification">'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-calendar"></span>'+
        '</div>'+
        '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">'+
          '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
          '<div id="description-' + index + '" class="description collapse">'+
            '<p>'+ description +
            '</p>'+
          '</div>'+
          '<p class="timeStamp">' + timeStamp + '</p>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-ok"></span>'+
        '</div>'+
      '</div>'
    );
  }
  else if (status === "denied") {
    $(".announceFeed").prepend(''+
      '<div class="row well notification">'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-calendar"></span>'+
        '</div>'+
        '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">'+
          '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
          '<div id="description-' + index + '" class="description collapse">'+
            '<p>'+ description +
            '</p>'+
          '</div>'+
          '<p class="timeStamp">' + timeStamp + '</p>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-remove"></span>'+
        '</div>'+
      '</div>'
    );
  }
  else if (status === "pending") {
    $(".announceFeed").prepend(''+
      '<div class="row well notification">'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-calendar"></span>'+
        '</div>'+
        '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">'+
          '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
          '<div id="description-' + index + '" class="description collapse">'+
            '<p>'+ description +
            '</p>'+
          '</div>'+
          '<p class="timeStamp">' + timeStamp + '</p>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-ok"></span>'+
        '</div>'+
        '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
          '<span class="glyphicon glyphicon-remove"></span>'+
        '</div>'+
      '</div>'
    );
  }
  else {
    alert(status + " is not a valid status for a MeetingRequest. must be [pending, approved, denied]")
  }
}

function appendMeetingApproved(meetingApproved, index) {
  var header = meetingApproved.getHeader();
  var timeStamp = meetingApproved.getTimeStamp();
  var description = meetingApproved.getDescription();
  $(".announceFeed").prepend(''+
    '<div class="row well notification">'+
      '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
        '<span class="glyphicon glyphicon-calendar"></span>'+
      '</div>'+
      '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">'+
        '<p class="subject"><a href="#description-' + index + '" data-toggle="collapse">' + header + '</a></p>'+
        '<div id="description-' + index + '" class="description collapse">'+
          '<p>'+ description +
          '</p>'+
        '</div>'+
        '<p class="timeStamp">' + timeStamp + '</p>'+
      '</div>'+
    '</div>'
  );

}


// Input string version of JSON, updates page with notifications
function updateFeed(jsonStr) {
  var index = 0;
  for (i = 0; i < jsonStr.length; i++) {
    var current = jsonStr[i];
    if (current.type === "Announcement") {
      var announcement = new Announcement(current.sender, current.freetext, current.timestamp);
      appendAnnouncement(announcement, index);
      index++;
    }
    else if (current.type === "TaskAssignment") {
      var taskAssignment = new TaskAssignment (current.sender, current.status, current.timestamp, current.ornumber);
      appendTaskAssignment(taskAssignment, index);
      index++;
    }
    else if (current.type === "TaskCompleted") {
      var taskCompleted = new TaskCompleted(current.sender, current.timestamp, current.ornumber, current.assigner);
      appendTaskCompleted(taskCompleted, index);
      index++;
    }
    else if (current.type === "MeetingRequest") {
      var meetingRequest = new MeetingRequest(current.sender, current.freetext, current.status, current.timestamp, current.location, current.starttime, current.endtime, current.priority)
      appendMeetingRequest(meetingRequest, index);
      index++;
    }
    else if (current.type === "MeetingApproved") {
      var meetingApproved = new MeetingApproved(current.sender, current.freetext, current.timestamp, current.location, current.starttime, current.endtime, current.priority);
      appendMeetingApproved(meetingApproved, index);
      index++;
    }
    else if (current.type === "Break") {

    }
    else {
      alert("JSON object index " + i + "is not valid. Must be [Announcement, TaskAssignment, TaskCompleted, MeetingRequest, MeetingApproved, Break] ");
    }
  }

}

$(document).ready(function() {
  updateFeed(testJson);
});



// LOGIC
//Json file will be a result of a SQL database pull request of
// all system activity where "receiver": "[current user]"

//cycle a call function of a new json file
//  if (json file size changes)
//        update notificationsArray




/*
Database Structure for System Activities JSON File
  - Time Stamp
  - Actor
  - receiver
  - Type: (Announcement/ TaskAssignment/ SwapRequest/ MeetingCreate)
  - message
  - roomNumber

Functions
- Create Announcement
- Approve or Deny
   1) Swap Requests
   2) Meeting Requests

Notifications

  For Administrator
  - Task: Doctor’s heads up that they are almost complete (15-30 mins)
  - Task: Doctor’s notification that they are complete
  - Notification: When Staff clocks out.
  - Swap: Swap Requests
  - Meetings: Meeting Requests
  - Announcements

  For User
  - Task assignments
  - Swap Request
  - Meeting Request (approval or deny)
  - Announcements

*/
