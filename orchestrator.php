<?php include "../inc/dbinfo.inc"; ?>
<!DOCTYPE html>
<html lang="en">
   <head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
 

   <title>OR-Orchestrator</title>

   <!-- Bootstrap core CSS -->
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
   <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css" rel="stylesheet" data-mbcode_theme="true">

   <link rel="stylesheet" type="text/css" href="main.css">

   <!-- Custom styles for this template -->

   <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
   <!--[if lt IE 9]>
     <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
     <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <!-[endif]-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.css">
    
  

 </head>

 <body>
 <?php

  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* If input fields are populated, fetch schedule */
  $json = "";

  FetchOrchestrator($connection, 1, 2, 1);



  function FetchOrchestrator($connection, $department, $PID, $isAdmin) {

   /*Call the sproc called "insert_new_user*/
   $call = mysqli_prepare($connection, 'CALL medularDB.fetch_orchestrator_schedule(?,?,?)');
   mysqli_stmt_bind_param($call, "iii", $department, $PID, $isAdmin);
   mysqli_stmt_execute($call);
   $result = mysqli_stmt_get_result($call);

   $rows = array();
   while($r = mysqli_fetch_assoc($result)){
    $rows[] = $r;
   }

   $GLOBALS['json'] = json_encode($rows);


   if (mysqli_stmt_errno($call)) echo "Failed to add user " . mysqli_stmt_error($call);
}

?>
    <nav class="navbar navbar-inverse navbar-static-top">
        <div class="container">
          <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <a class="navbar-brand" href="#">Medular</a>
          </div>

          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href="notifications.php"><span class="glyphicon glyphicon-bell"></span> Notifications</a></li>
              <li><a href="breaks.html"><span class="glyphicon glyphicon-cutlery"></span> Breaks</a></li>
              <li class="active"><a href="orchestrator.php"><span class="glyphicon glyphicon-sort"></span> Orchestrator</a></li>           
              <li><a href="history.php"><span class="glyphicon glyphicon-time"></span> History</a></li>
              <li><a href="settings.php"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
              </ul>
            <p id="userName" class="navbar-text navbar-right"><span class="glyphicon glyphicon-user"></span> </p>
          </div>
        </div>
      </nav>

  <div class="container">
    <div class="row">
      <button type="button" class="col-xs-2 col-md-2 btn btn-primary" onclick="getPrev()">Prev</button>
      <h2 id="time" class="col-xs-8 col-md-8 text-center"></h2>
      <button type="button" class="col-xs-2 col-md-2 btn btn-primary" onclick="getNext()">Next</button>
    </div>
   </div>
   
   <div class="container">

      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#orroom" aria-controls="home" role="tab" data-toggle="tab">OR Room</a></li>
        <li role="presentation"><a href="#attending" aria-controls="profile" role="tab" data-toggle="tab">Attending</a></li>
        <li role="presentation"><a href="#crna" aria-controls="messages" role="tab" data-toggle="tab">CRNA</a></li>
        <li role="presentation"><a href="#resident" aria-controls="resident" role="tab" data-toggle="tab">Resident</a></li>
        <li role="presentation"><a href="#tech" aria-controls="settings" role="tab" data-toggle="tab">Tech</a></li>
      </ul>



      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="orroom">
        <br />
          <div class="container">
             <table 
              id = "mainORTable"
               data-toggle="mainORTable"
               data-sort-name="stargazers_count"
               data-sort-order="desc"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true">


            <thead>
                    <tr>
                        <th data-field="location" data-sortable="true">OR Room #</th>
                        <th data-field="attending">Attending</th>
                        <th data-field="crna">CRNA</th>
                        <th data-field="resident">Resident</th>
                        <th data-field="tech">Tech</th>
                        
                    </tr>
                </thead>

        </table>
          <br>
        </div>
        </div>

        <div role="tabpanel" class="tab-pane" id="attending">
            <br />
            <div class="container">
            <table 
              id = "attendingTable"
               data-toggle="attendingTable"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true">


                <thead>
                        <tr>
                           <th >Role</th>
                            <th data-field="name">Attending</th>
                            <th data-field="location">Locations</th>
                            <th>Next</th>
                            <th>Comments</th>
                            <th>Breaks</th>
                        </tr>
                    </thead>

            </table>
              <br>
            </div>
          </div>
       
        <div role="tabpanel" class="tab-pane" id="crna">
          <br />
            <div class="container">
            <table 
              id = "crnaTable"
               data-toggle="crnaTable"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true">


                <thead>
                        <tr>
                           <th >Role</th>
                            <th data-field="name">CRNA</th>
                            <th data-field="location">Locations</th>
                            <th>Next</th>
                            <th>Comments</th>
                            <th>Breaks</th>
                        </tr>
                    </thead>

            </table>
              <br>
    
            </div>
        </div>

        <div role="tabpanel" class="tab-pane" id="resident">
          <br />
            <div class="container">
             <table 
              id = "residentTable"
               data-toggle="residentTable"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true">


                <thead>
                        <tr>
                           <th >Role</th>
                            <th data-field="name">Resident</th>
                            <th data-field="location">Locations</th>
                            <th>Next</th>
                            <th>Comments</th>
                            <th>Breaks</th>
                        </tr>
                    </thead>

            </table>
              <br>
            </div>
        </div>

        <div role="tabpanel" class="tab-pane" id="tech">
          <br />
            <div class="container">
              <table 
              id = "techTable"
               data-toggle="techTable"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true">


                <thead>
                        <tr>
                           <th >Role</th>
                            <th data-field="name">Tech</th>
                            <th data-field="location">Locations</th>
                            <th>Next</th>
                            <th>Comments</th>
                            <th>Breaks</th>
                        </tr>
                    </thead>

            </table>
              <br>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="services"></div>
      </div>

</div>


    <footer class="footer">
      <div class="container">
            <p class="text-muted">Copyright © 2017 - Team Medular</p>
      </div>
    </footer>

     <!-- Bootstrap core JavaScript
   ================================================== --><!-- Placed at the end of the document so the pages load faster --><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script type="text/javascript" src="shared.js"></script>
    <script type="text/javascript" src="orchestrator.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js"></script>

    <script type="text/javascript">
    	window.onload = function() {
   			var orchestratorData = <?php echo $GLOBALS['json'] ?>;
    		localStorage.setItem("orchestratorData", JSON.stringify(orchestratorData));
    		/*console.log(localStorage.getItem("orchestratorData"));*/
		}
    	
    </script>
    
 </body>
 </html>
  
