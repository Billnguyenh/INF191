var orchestratorData = [
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 10:00:00",
    "end_time": "2017-02-15 12:00:00"
  },
  {
    "first_name": "Chris",
    "last_name": "Ries",
    "position": "CRNA",
    "location": "OR105",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 10:00:00",
    "end_time": "2017-02-15 12:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 12:00:00",
    "end_time": "2017-02-15 14:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",    
    "position": "Resident",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 12:00:00",
    "end_time": "2017-02-15 14:00:00"
  },
  {
    "first_name": "Indy",
    "last_name": "Jones",
    "position": "Tech",
    "location": "OR107",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 11:00:00",
    "end_time": "2017-02-15 13:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 18:00:00",
    "end_time": "2017-02-15 20:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR103",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 16:00:00",
    "end_time": "2017-02-15 18:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 11:00:00",
    "end_time": "2017-02-15 13:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "CRNA",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 15:00:00",
    "end_time": "2017-02-15 17:00:00"
  },
  {
    "first_name": "Jane",
    "last_name": "Smith",
    "position": "Resident",
    "location": "OR101",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 16:00:00",
    "end_time": "2017-02-15 18:00:00"
  },
  {
    "first_name": "Kush",
    "last_name": "Patel",
    "position": "Attending",
    "location": "OR105",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 02:00:00",
    "end_time": "2017-02-15 08:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Applebaum",
    "position": "Resident",
    "location": "OR105",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 02:00:00",
    "end_time": "2017-02-15 08:00:00"
  },
  {
    "first_name": "Sam",
    "last_name": "Nunez",
    "position": "CRNA",
    "location": "OR106",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 09:00:00",
    "end_time": "2017-02-15 11:00:00"
  },
  {
    "first_name": "Bill",
    "last_name": "Nunez",
    "position": "Resident",
    "location": "OR107",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 11:30:00",
    "end_time": "2017-02-15 13:00:00"
  },
  {
    "first_name": "Chris",
    "last_name": "Ries",
    "position": "CRNA",
    "location": "OR107",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 11:30:00",
    "end_time": "2017-02-15 13:00:00"
  },
  {
    "first_name": "Janay",
    "last_name": "Nunez",
    "position": "Attending",
    "location": "OR102",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 04:20:00",
    "end_time": "2017-02-15 05:00:00"
  },
  {
    "first_name": "Kush",
    "last_name": "Patel",
    "position": "Tech",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 10:20:00",
    "end_time": "2017-02-15 17:22:00"
  },
  {
    "first_name": "Bill",
    "last_name": "Nguyen",
    "position": "CRNA",
    "location": "OR104",
    "type": "NULL",
    "priority": "NULL",
    "start_time": "2017-02-15 11:20:00",
    "end_time": "2017-02-15 16:22:00"
  }
];
//Database call here to get data and save as var orchestratorData = ...

var now = new Date(Date.now());

var timeText = now.getHours() + ":00" +" - " + (now.getHours()+ 1) + ":00";
$('#time').append(timeText);

var filteredbyDateData;
var mainORTableData;
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
    var tempobjs = [], obj;
    var locationCheckBool = false;
    for (var i = tableData.length - 1; i >= 0; i--) {
        if (tempobjs.length === 0) {
            obj = {location: tableData[i].location};
            switch(tableData[i].position){
                case "Attending":
                    obj.attending = tableData[i].name;
                    break;
                case "CRNA":
                    obj.crna = tableData[i].name;
                    break;
                case "Resident":
                    obj.resident = tableData[i].name;
                    break;
                case "Tech":
                    obj.tech = tableData[i].name;
                    break;
            }
            tempobjs.push(obj);
        } else {
            for (var t = tempobjs.length - 1; t >= 0; t--) {
                if(tempobjs[t].location === tableData[i].location){
                    locationCheckBool = true;
                    switch(tableData[i].position){
                        case "Attending":
                            tempobjs[t].attending = tableData[i].name;
                            break;
                        case "CRNA":
                            tempobjs[t].crna = tableData[i].name;
                            break;
                        case "Resident":
                            tempobjs[t].resident = tableData[i].name;
                            break;
                        case "Tech":
                            tempobjs[t].tech = tableData[i].name;
                            break;
                    }
                } 

            }
            if(!locationCheckBool) {
                obj = {location: tableData[i].location};
                switch(tableData[i].position){
                    case "Attending":
                        obj.attending = tableData[i].name;
                        break;
                    case "CRNA":
                        obj.crna = tableData[i].name;
                        break;
                    case "Resident":
                        obj.resident = tableData[i].name;
                        break;
                    case "Tech":
                        obj.tech = tableData[i].name;
                        break;
                }
                tempobjs.push(obj);
            }
            locationCheckBool = false;

        }

    }
    

    mainORTableData = tempobjs;

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
        data: mainORTableData
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
    now = new Date(now.valueOf());
    now.setHours(now.getHours() - 1);
    timeText = now.getHours() + ":00" +" - " + (now.getHours()+ 1) + ":00";
    $('#time').text(timeText);
    destroyTables();
    var prevData = getByTime(now);
    setTableData(prevData);
}

function getNext() {
    now = new Date(now.valueOf());
    now.setHours(now.getHours() + 1);
    timeText = now.getHours() + ":00" +" - " + (now.getHours()+ 1) + ":00";
    $('#time').text(timeText);
    destroyTables();
    var nextData = getByTime(now);
    setTableData(nextData);

}

$(function () {
   setTableData(filteredbyDateData);
});