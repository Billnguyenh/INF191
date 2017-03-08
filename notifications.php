<?php include "../inc/dbinfo.inc"; ?>
<!DOCTYPE html>
<html lang="en">
   <head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <link rel="icon" href="favicon.ico">

   <title>OR-Orchestrator</title>

   <!-- Bootstrap core CSS -->
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
   <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/spacelab/bootstrap.min.css" rel="stylesheet" data-mbcode_theme="true">
   <link rel="stylesheet" type="text/css" href="main.css">
   <script src="jquery-3.1.1.min.js"></script>

   <!-- Custom styles for this template -->

   <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
   <!--[if lt IE 9]>
     <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
     <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <!-[endif]-->

 </head>

 <body>
 
 <?php

  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* If input fields are populated, fetch schedule */
  $announcement = htmlentities($_POST['Announcement']);
  $json = "";

  FetchNotifications($connection, 1, 2, 1);

  if(strlen(trim($announcement)) > 0){
    InsertAnnouncement($connection, 1, 2, $announcement, 1);
    header('Refresh: 0');
  }

  FetchNotifications($connection, 1, 2, 1);


  function FetchNotifications($connection, $department, $PID, $isAdmin) {

   $call = mysqli_prepare($connection, 'CALL medularDB.fetch_notification_details(?,?,?)');
   mysqli_stmt_bind_param($call, "iii", $isAdmin, $PID, $$department);
   mysqli_stmt_execute($call);
   $result = mysqli_stmt_get_result($call);

   $rows = array();
   while($r = mysqli_fetch_assoc($result)){
    $rows[] = $r;
   }

   $GLOBALS['json'] = json_encode($rows);


   if (mysqli_stmt_errno($call)) echo "Failed to add user " . mysqli_stmt_error($call);


  }

  function InsertAnnouncement($connection, $department, $PID, $announcement, $isAdmin) {
  
  $call = mysqli_prepare($connection, 'CALL medularDB.insert_new_announcement(?,?,?,?)');
   mysqli_stmt_bind_param($call, "iisi", $PID, $department, $announcement, $isAdmin);
   mysqli_stmt_execute($call);


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
              <li class="active"><a href="notifications.php"><span class="glyphicon glyphicon-bell"></span> Notifications</a></li>
              <li><a href="breaks.php"><span class="glyphicon glyphicon-cutlery"></span> Breaks</a></li>
              <li><a href="orchestrator.php"><span class="glyphicon glyphicon-sort"></span> Orchestrator</a></li>           
              <li><a href="history.php"><span class="glyphicon glyphicon-time"></span> History</a></li>
              <li><a href="settings.php"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
              </ul>
            <p id="userName" class="navbar-text navbar-right"><span class="glyphicon glyphicon-user"></span> </p>
          </div>
        </div>
      </nav>

    <div class="postAnnounce container">

      <!-- Post Announcement Bar -->
      <div class="row well well-lg">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          <span class="glyphicon glyphicon-bullhorn"></span>
        </div>
        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <form role="form" action="<?PHP echo $_SERVER['SCRIPT_NAME'] ?>" method="POST">
            <div class="input-group input-group-sm">
              <input id="announcement" type="text" name="Announcement" class="form-control" placeholder="Write an Announcement">
              <span class="input-group-btn">
                <button id="postBtn" class="btn btn">Post</buton>
              </span>
            </div>
          <form/>
        </div>
      </div>
    </div>

    <div class="announceFeed container">
      <!-- Dynamically Updating -->
    </div>


    <footer class="footer">
      <div class="container">
            <p class="text-muted">Copyright © 2017 - Team Medular</p>
      </div>
    </footer>
   <script type="text/javascript">
   if (window.localStorage) {
        var notificationsData = <?php echo $GLOBALS['json'] ?>;
        localStorage.setItem("notificationsData", JSON.stringify(notificationsData));
   }
    </script>
     <!-- Bootstrap core JavaScript, Placed at the end of the document so the pages load faster -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
   <script type="text/javascript" src="shared.js"></script>
   <script src="notifications.js"></script>

 </body>
 </html>
