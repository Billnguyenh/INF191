var data = 
[
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "type": "Break",
    "actions": "No Comment",
    "status": "Approved",
    "timestamp": "2017-01-30 21:27:45"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "type": "Task",
    "actions": "No Comment",
    "status": "Denied",
    "timestamp": "2017-01-30 21:31:21"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "type": "Task",
    "actions": "No Comment",
    "status": "Denied",
    "timestamp": "2017-01-30 21:32:36"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "type": "Meeting",
    "actions": "Was late",
    "status": "Denied",
    "timestamp": "2017-01-30 21:33:07"
  },
  {
    "first_name": "Kush",
    "last_name": "Patel",
    "type": "Break",
    "actions": "No Comment",
    "status": "Approved",
    "timestamp": "2017-01-30 22:50:07"
  }
]

$(function () {
    $('#table').bootstrapTable({
        data: data
    });
});