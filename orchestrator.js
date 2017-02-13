var orchestratorData = [
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 20:00:00",
    "end_time": "2017-02-13 22:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 22:00:00",
    "end_time": "2017-02-13 24:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 20:00:00",
    "end_time": "2017-02-13 22:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 18:00:00",
    "end_time": "2017-02-13 20:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "location": "OR103",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 16:00:00",
    "end_time": "2017-02-13 18:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 11:00:00",
    "end_time": "2017-02-13 13:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 13:00:00",
    "end_time": "2017-02-13 15:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 11:00:00",
    "end_time": "2017-02-13 13:00:00"
  }
];
var now = new Date(Date.now());

var timeText = document.createElement("h2");
timeText.innerHTML = "Current Time: " + now.getHours() + ":" + now.getMinutes() +":" + now.getSeconds();
$('#time').append(timeText);

var filteredData;

function getByTime(date){
    return orchestratorData.filter(function(el) {
        var startTime = new Date(Date.parse(el.start_time.replace('-', '/', 'g')));
        var endTime = new Date(Date.parse(el.end_time.replace('-', '/', 'g')));
         if(startTime <= now && now <= endTime) {
            return el;
         }
    });
}

filteredData = getByTime(now);

$(function () {
    $('#mainORTable').bootstrapTable({
        data: filteredData
    });
});