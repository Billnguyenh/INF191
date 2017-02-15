var orchestratorData = [
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 20:00:00",
    "end_time": "2017-02-14 22:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 22:00:00",
    "end_time": "2017-02-14 24:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",    
    "position": "Resident",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 20:00:00",
    "end_time": "2017-02-14 22:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 18:00:00",
    "end_time": "2017-02-14 20:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR103",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 16:00:00",
    "end_time": "2017-02-14 18:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 11:00:00",
    "end_time": "2017-02-14 13:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 15:00:00",
    "end_time": "2017-02-14 17:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "position": "Resident",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-14 16:00:00",
    "end_time": "2017-02-14 18:00:00"
  }
];
var now = new Date(Date.now());

var timeText = now.getHours() + ":00" +" - " + (now.getHours()+ 1) + ":00";
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
         if(startTime <= date && date <= endTime) {
            el['name'] = el.first_name + " " + el.last_name;
            return el;
         }
    });
}

filteredbyDateData = getByTime(now);


function setTableData(tableData) {
    attendingTableData = tableData.filter(function(data) {
        if(data.position === "Attending"){
            return data;
        } });

    crnaTableData = tableData.filter(function(data) {
        if(data.position === "CRNA"){
            return data;
        }});
    residentTableData = tableData.filter(function(data) {
        if(data.position === "Resident"){
            return data;
        }});

    techTableData = tableData.filter(function(data) {
        if(data.position === "Tech"){
            return data;
        }});
    
    $('#mainORTable').bootstrapTable({
        data: tableData
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
}

function destroyTables(){
    $('#mainORTable').bootstrapTable("destroy");
    $('#attendingTable').bootstrapTable("destroy");
    $('#crnaTable').bootstrapTable("destroy");
    $('#residentTable').bootstrapTable("destroy");
    $('#techTable').bootstrapTable("destroy");
}

function getPrev() {
    console.log("Prev button was clicked");
    var newDate = new Date(now.valueOf());
    newDate.setHours(now.getHours() - 1);
    timeText = newDate.getHours() + ":00" +" - " + (newDate.getHours()+ 1) + ":00";
    $('#time').text(timeText);
    console.log(newDate);
    destroyTables();
    var prevData = getByTime(newDate);
    setTableData(prevData);
}

function getNext() {
    console.log("Next button was clicked");
    var newDate = new Date(now.valueOf());
    newDate.setHours(now.getHours() + 1);
    timeText = newDate.getHours() + ":00" +" - " + (newDate.getHours()+ 1) + ":00";
    $('#time').text(timeText);
    console.log(newDate);
    destroyTables();
    var nextData = getByTime(newDate);
    setTableData(nextData);

}

$(function () {
   setTableData(filteredbyDateData);
});