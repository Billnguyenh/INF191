<?php
include "../inc/dbinfo.inc";
/*include_once '../inc/login_functions.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';

}*/
?>

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
   <!--<script type="text/JavaScript" src="sha512.js"></script>-->
   <!--<script type="text/JavaScript" src="forms.js"></script>-->

 </head>

 <body>

     <?php
      /* Connect to MySQL and select the database. */
        $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

        if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();

        $database = mysqli_select_db($connection, DB_DATABASE);

        $email = htmlentities($_POST['Email']);
        $password = htmlentities($_POST['Password']);
   

        if (strlen($email) || strlen($password)) {
          InsertUser($connection, $email, $password);
        }
     ?>


     <div class="container">
         <form class="form-signin" action="process_login.php" method="post" role="form">
             <h2 class="form-signin-heading">Please sign in</h2>
             <div class="row">
               <div class="form-group floating-label-form-group">
                  <label>Email Address</label>
                   <input id="emailTxt" name="Email" type="email" class="form-control" placeholder="Email address" autofocus="">
                </div>
             </div>
             <div class="row">
             <div class="form-group floating-label-form-group">
                <label>Password</label>
                 <input type="password" name="Password" class="form-control" placeholder="Password">
              </div>
           </div>
             <label style="padding-left: 25px;" class="checkbox">
                <input type="checkbox" value="remember-me">
                 Remember me
             </label>
             <a class="btn btn-lg btn-primary btn-block" type="submit" href="notifications.php" id="signIn";">Sign in</a>
             <a class="btn btn-lg btn-primary btn-block" href="signup.php" role="button">Get Started&nbsp;</a>
         </form>
     </div><!-- /container --><!-- Bootstrap core JavaScript
   ================================================== --><!-- Placed at the end of the document so the pages load faster -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>


   <script type="text/javascript">
      $(function() {
          $("body").on("input propertychange", ".floating-label-form-group", function(e) {
              $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
          }).on("focus", ".floating-label-form-group", function() {
              $(this).addClass("floating-label-form-group-with-focus");
          }).on("blur", ".floating-label-form-group", function() {
              $(this).removeClass("floating-label-form-group-with-focus");
          });
      });
      // Janay overhere! Change this userObject to be from db :) thanks


        $("#signIn").click(function () {
            var userObject = {
        "first_name": "Samantha",
        "last_name": "Applebaum",
        "person_id": 4,
        "email": "sappleba@uci.edu",
        "department_id": 1,
        "position": "CRNA",
        "username": "sappleba",
        "isAdmin": 1,
    };
            if (window.localStorage) {
              localStorage.setItem("userObject", JSON.stringify(userObject));
            }
        });



   </script>
    
<?php
        echo '<div style="text-align: center;">';
        if (login_check($mysqli) == true) {
                        echo '<p>Currently logged ' . $logged . ' as ' . htmlentities($_SESSION['username']) . '.</p>';
            
            echo '<p>Do you want to change user? <a href="logout.php">Log out</a>.</p>';
        } else {
                        echo '<p>Currently logged ' . $logged . '.</p>';
                        echo "<p>If you don't have a login, please <a href='signup.php'>register</a></p>";
                }
        echo '</div>';
?>      
      
 </body>
</html>

<?php

function InsertUser($connection,$email, $password) {

   /*Call the sproc called "insert_new_user*/
   $call = mysqli_prepare($connection, 'CALL medularDB.fetch_user_details(?,?)');
   mysqli_stmt_bind_param($call, "ss", $email, $password);
   mysqli_stmt_execute($call);

   $result = mysqli_stmt_get_result($call);

   $rows = array();
   while($r = mysqli_fetch_assoc($result)){
    $rows[] = $r;
   }

   if(empty($rows)){
      echo '<div style="text-align: center;">';
      echo '<p><span style="color: red;">Incorrect login info, please try again</span></p>';
      echo '</div>';
   }else{
      $GLOBALS['json'] = json_encode($rows);
   }


   if (mysqli_stmt_errno($call)) echo "Failed to fetch user " . mysqli_stmt_error($call);
}

?>
