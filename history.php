<?php include "../inc/dbinfo.inc"; ?>
<!DOCTYPE html>
<html lang="en">
   <head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" href="favicon.ico">

  <title>OR-History</title>

  <!-- Bootstrap core CSS -->
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css" rel="stylesheet" data-mbcode_theme="true">
  

  <!-- Custom styles for this template -->
<link rel="stylesheet" type="text/css" href="main.css">
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

  FetchHistory($connection);



  function FetchHistory($connection) {

   /*Call the sproc called "insert_new_user*/
   $call = mysqli_prepare($connection, 'CALL medularDB.fetch_history_log_details()');
   //mysqli_stmt_bind_param($call, "iii", $department, $PID, $isAdmin);
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
              <li><a href="breaks.php"><span class="glyphicon glyphicon-cutlery"></span> Breaks</a></li>
              <li><a href="orchestrator.php"><span class="glyphicon glyphicon-sort"></span> Orchestrator</a></li>           
              <li class="active"><a href="history.php"><span class="glyphicon glyphicon-time"></span> History</a></li>
              <li><a href="settings.php"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
              </ul>
            <p id="userName" class="navbar-text navbar-right"><span class="glyphicon glyphicon-user"></span> </p>
          </div>
        </div>
      </nav>

 
   


<div class="container well well-lg">
      <div class="news-story">  
      <h1>History Log</h1>
 <table 
      id = "table"
       data-toggle="table"
       data-sort-height="460"
       data-sort-name="stargazers_count"
       data-sort-order="desc"
       data-search="true"
       data-show-refresh="true"
       data-show-toggle="true">


    <thead>
            <tr>
                <th data-field="assigner">Assigner</th>
                <th data-field="receiver">Receiver</th>
                <th data-field="type"
                    data-sortable="true">Type</th>
                <th data-field="status"
                    data-sortable="true">Status</th>
                <th data-field="timestamp"
                    data-sortable="true">Time</th>
                <th data-field="actions">Notes</th>
            </tr>
        </thead>

</table>
</div>
</div>


<footer class="footer">
      <div class="container">
            <p class="text-muted">Copyright © 2017 - Team Medular</p>
      </div>
</footer>

    <!-- Bootstrap core JavaScript
   ================================================== --><!-- Placed at the end of the document so the pages load faster -->

    <script type="text/javascript">
    if (window.localStorage) {
        var historyData = <?php echo $GLOBALS['json'] ?>;
        localStorage.setItem("historyData", JSON.stringify(historyData));
    }
    </script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

   <script type="text/javascript" src="shared.js"></script>
   <script type="text/javascript" src="history.js"></script>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js"></script>



 </body>
 </html>