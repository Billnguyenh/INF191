var data = 
[
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "type": "Break",
    "actions": "Not sure where this field should go yet",
    "status": "Approved",
    "timestamp": "2017-01-30 21:27:45"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "type": "Task",
    "actions": "Not sure where this field should go yet",
    "status": "Denied",
    "timestamp": "2017-01-30 21:31:21"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "type": "Task",
    "actions": "Not sure where this field should go yet",
    "status": "Denied",
    "timestamp": "2017-01-30 21:32:36"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "type": "Meeting",
    "actions": "Not sure where this field should go yet",
    "status": "Denied",
    "timestamp": "2017-01-30 21:33:07"
  }
]

$(function () {
    $('#table').bootstrapTable({
        data: data
    });
});