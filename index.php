<?php include "../inc/dbinfo.inc"; ?>
<!DOCTYPE html>
<html lang="en">
   <head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="description" content="">
   <meta name="author" content="">
   <link rel="icon" href="favicon.ico">

   <title>OR-Orchestrator</title>

   <!-- Bootstrap core CSS -->
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet"><link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/spacelab/bootstrap.min.css" rel="stylesheet" data-mbcode_theme="true">

   <!-- Custom styles for this template -->
   <link href="style-auto.css" rel="stylesheet">

   <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
   <!--[if lt IE 9]>
     <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
     <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <!-[endif]-->
 </head>

 <body>
  <?php
  $email = htmlentities($_POST['Email']);
  $password = htmlentities($$_POST['Password']);

  /* Precautions to prevent MySQL injection. */
  $email = stripcslashes($email);
  $password = stripcslashes($password);
  $email = mysql_real_escape_string($email);
  $password = mysql_real_escape_string($password);

  /* Connect to MySQL server and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* Query the database for a valid user */
  $result = mysql_query("select * from users where email = '$email' and password = '$password'") or die("Failed to query database " .mysql_error());

  $row = mysql_fetch_array($results);
  if ($row['Email] == $email && $row['Password'] == $password)
  {
  echo "Login successful! Welcome ".$row['Email'];
  }
  else
  {
  echo "Failed to login.";
  }
  ?>

     <div class="container">
         <form class="form-signin" role="form">
             <h2 class="form-signin-heading">Please sign in</h2>
             <input type="email" class="form-control" placeholder="Email address" autofocus="">
             <input type="password" class="form-control" placeholder="Password">
             <label class="checkbox">
                 <input type="checkbox" value="remember-me">
                 Remember me
             </label>
             <a class="btn btn-lg btn-primary btn-block" type="submit" href="notifications.html">Sign in</a>
             <a class="btn btn-lg btn-primary btn-block" href="signup.html" role="button">Get Started&nbsp;</a>
         </form>
     </div><!-- /container --><!-- Bootstrap core JavaScript
   ================================================== --><!-- Placed at the end of the document so the pages load faster --><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

 </body></html>
