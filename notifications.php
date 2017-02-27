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
   <script src="notifications.js"></script>

   <!-- Custom styles for this template -->

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
            <li class="active"><a href="notifications.html"><span class="glyphicon glyphicon-bell"></span> Notifications</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-calendar"></span> Schedule</a></li>
            <li><a href="orchestrator.html"><span class="glyphicon glyphicon-sort"></span> Orchestrator</a></li>
            <li><a href="history.html"><span class="glyphicon glyphicon-time"></span> History</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
            </ul>

          <p class="navbar-text navbar-right"><span class="glyphicon glyphicon-user"></span> Sam Applebaum</p>

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
            <div class="input-group input-group-sm">
              <input id="announcement" type="text" class="form-control" placeholder="Write an Announcement">
              <span class="input-group-btn">
                <button id="postBtn" class="btn btn">Post</buton>
              </span>
            </div>
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

     <!-- Bootstrap core JavaScript
   ================================================== --><!-- Placed at the end of the document so the pages load faster --><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

 </body>
 </html>
