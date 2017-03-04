<!DOCTYPE html>
<html lang="en">
   <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1">

     <link rel="icon" href="favicon.ico">

     <title>OR-Orchestrator</title>

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
   </head>
   <body>
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
              <li class="active"><a href="breaks.php"><span class="glyphicon glyphicon-cutlery"></span> Breaks</a></li>
              <li><a href="orchestrator.php"><span class="glyphicon glyphicon-sort"></span> Orchestrator</a></li>           
              <li><a href="history.php"><span class="glyphicon glyphicon-time"></span> History</a></li>
              <li><a href="settings.php"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
              </ul>
            <p id="userName" class="navbar-text navbar-right"><span class="glyphicon glyphicon-user"></span> </p>
          </div>
        </div>
      </nav>

     <div class="container well well-lg">
        <h1>Break Requests</h1>
        <div class="container">
        <div id="break-buttons">
          <button id="request-break-btn" data-text-swap="Cancel Request" class="btn btn-primary" type="button">Request Break</button>
          <button id="self-break-btn" data-text-swap="End Break" type="button" class="btn btn-primary">Take Break</button>
        </div>
        <!-- BREAK INTERFACE BODY (2 columns) -->
        <div id="break-lists" class="row">
          <div class="col-xs-1">

          </div>
          <!-- BREAK REQUEST QUEUE (LEFT COLUMN) -->
          <div id="queue" class="col-xs-5">
            <div id="queue-title" class="row">
                <h2>Break Request Queue</h2>
            </div>
            <!-- POPULATE WITH BREAK ITEMS -->

          </div>

          <!-- ON BREAK LIST (RIGHT COLUMN) -->
          <div id="on-break" class="col-xs-5">
            <div id="on-break-title" class="row">
                <h2>On Break</h2>
            </div>
            <!-- POPULATE WITH BREAK ITEMS -->


          </div>
          <div class="col-xs-1">

          </div>
        </div>
      </div>
      </div>


      <br />
      <footer class="footer">
        <div class="container">
              <p class="text-muted">Copyright © 2017 - Team Medular</p>
        </div>
      </footer>
    <!-- Bootstrap core JavaScript
  ================================================== --><!-- Placed at the end of the document so the pages load faster -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <script type="text/javascript" src="shared.js"></script>
  <script src="breaks.js"></script>

  </body>
</html>
