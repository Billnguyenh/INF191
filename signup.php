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
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">

   <!-- Custom styles for this template -->
   <link href="style-auto.css" rel="stylesheet">

   <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
   <!--[if lt IE 9]>
     <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
     <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <!--[endif]---->
 </head>

 <body>
  <?php

  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* If input fields are populated, add a row to the login table. */
  $first_name = htmlentities($_POST['FirstName']);
  $last_name = htmlentities($_POST['LastName']);
  $email = htmlentities($_POST['Email']);
  $department = intval(htmlentities($_POST['Department']));
  $position = htmlentities($_POST['Position']);
  $admin = intval(htmlentities($_POST['Admin']));
  $password = htmlentities($_POST['Password']);
  $ucinetid = htmlentities($_POST['UCINetID']);

  if (strlen($first_name) || strlen($last_name) || strlen($email) || strlen($password) || strlen($ucinetid) || strlen($department) || strlen($position) || strlen($admin) ) {
    InsertUser($connection, $first_name, $last_name, $email, $password, $ucinetid, $department, $position, $admin);
  }
?>
   <div class="container">

     <form class="form-signin" role="form" action="<?PHP echo $_SERVER['SCRIPT_NAME'] ?>" method="POST">
         <h2 class="form-signin-heading">Please Sign Up</h2>
         <input type="text" name="FirstName" class="form-control" placeholder="First Name" required=""> </br>
         <input type="text" name="LastName" class="form-control" placeholder="Last Name" required=""></br>
         <input type="email" name="Email" class="form-control" placeholder="Email address" required="" autofocus=""></br>
         <input type="text" name="UCINetID" class="form-control" placeholder="UCI Net ID" required=""></br>
         <select name="Department" class="form-control">
          <option value="" selected>Select your Department</option>
         <?php 
              $sql = mysqli_query($connection, "SELECT DID, `name` FROM medularDB.tbl_department_types")  or die(mysql_error());  
              while ($row = $sql->fetch_assoc()){
                $id = $row['DID'];
                $name = $row['name']; 
                echo "<option value=".$id.">" . $name . "</option>";
              }
          ?>
         </select></br>
         <select name="Position" class="form-control">
           <option value="" selected>Select your Position</option>
           <option value="Attending">Attending</option>
           <option value="CRNA">CRNA</option>
           <option value="Resident">Resident</option>
           <option value="Tech">Tech</option>
         </select></br>
         <select name="Admin" class="form-control">
           <option value="" selected>Are you an Admin?</option>
           <option value="1">Yes</option>
           <option value="0">No</option>
         </select></br>
         <input type="password" name="Password" class="form-control" placeholder="Password" required=""></br>
         <input type="password" name="ConfirmPassword" class="form-control" placeholder="Confirm Password" required="">
         <span class="checkbox">
              <input type="checkbox" value="remember-me">Remember me
         </span>
         <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
     </form>

   </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
   ================================================== -->
   <!-- Placed at the end of the document so the pages load faster -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

 
</body></html>

<?php

function InsertUser($connection, $first_name, $last_name, $email, $password, $ucinetid, $department, $position, $admin) {

   /*Call the sproc called "insert_new_user*/
   $call = mysqli_prepare($connection, 'CALL medularDB.insert_new_user(?,?,?,?,?,?,?,?)');
   mysqli_stmt_bind_param($call, "issssssi", $department, $ucinetid, $password, $email, $first_name, $last_name, $position, $admin);
   mysqli_stmt_execute($call);


   if (mysqli_stmt_errno($call)) echo "Failed to add user " . mysqli_stmt_error($call);
}

?>