var orchestratorData = [
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 20:00:00",
    "end_time": "2017-02-13 22:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 22:00:00",
    "end_time": "2017-02-13 24:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",    
    "position": "Resident",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 20:00:00",
    "end_time": "2017-02-13 22:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 18:00:00",
    "end_time": "2017-02-13 20:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR103",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 16:00:00",
    "end_time": "2017-02-13 18:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 11:00:00",
    "end_time": "2017-02-13 13:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 16:00:00",
    "end_time": "2017-02-13 18:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "position": "Resident",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-13 16:00:00",
    "end_time": "2017-02-13 18:00:00"
  }
];
var now = new Date(Date.now());

var timeText = document.createElement("h2");
timeText.innerHTML = "Current Time: " + now.getHours() + ":" + now.getMinutes() +":" + now.getSeconds();
$('#time').append(timeText);

var filteredbyDateData;
var attendingTableData;
var crnaTableData;
var residentTableData;
var techTableData;


function getByTime(date){
    return orchestratorData.filter(function(el) {
        var startTime = new Date(Date.parse(el.start_time.replace('-', '/', 'g')));
        var endTime = new Date(Date.parse(el.end_time.replace('-', '/', 'g')));
         if(startTime <= now && now <= endTime) {
            el['name'] = el.first_name + " " + el.last_name;
            return el;
         }
    });
}

filteredbyDateData = getByTime(now);

attendingTableData = filteredbyDateData.filter(function(data) {
    if(data.position === "Attending"){
        return data;
    }
});

crnaTableData = filteredbyDateData.filter(function(data) {
    if(data.position === "CRNA"){
        return data;
    }
});

residentTableData = filteredbyDateData.filter(function(data) {
    if(data.position === "Resident"){
        return data;
    }
});

techTableData = filteredbyDateData.filter(function(data) {
    if(data.position === "Tech"){
        return data;
    }
});

$(function () {
    $('#mainORTable').bootstrapTable({
        data: filteredbyDateData
    });
    $('#attendingTable').bootstrapTable({
        data: attendingTableData
    });
    $('#crnaTable').bootstrapTable({
        data: crnaTableData
    });
    $('#residentTable').bootstrapTable({
        data: residentTableData
    });
    $('#techTable').bootstrapTable({
        data: techTableData
    });
});