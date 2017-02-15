<?php
include_once 'inc/db_connect.php';
include_once 'inc/login_functions.php';

sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';

}
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
   <script type="text/JavaScript" src="js/sha512.js"></script>
   <script type="text/JavaScript" src="js/forms.js"></script>
 </head>

 <body>

     <?php
     if (isset($_GET['error'])) {
         echo '<p class="error">Error Logging In!</p>;
     }
     ?>


     <form action="includes/process_login.php" method="post" name="login_form">                      
            Email: <input type="text" name="email" />
            Password: <input type="password" 
                             name="password" 
                             id="password"/>
            <input type="button" 
                   value="Login" 
                   onclick="formhash(this.form, this.form.password);" /> 
        </form>


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
    
<?php
        if (login_check($mysqli) == true) {
                        echo '<p>Currently logged ' . $logged . ' as ' . htmlentities($_SESSION['username']) . '.</p>';
 
            echo '<p>Do you want to change user? <a href="includes/logout.php">Log out</a>.</p>';
        } else {
                        echo '<p>Currently logged ' . $logged . '.</p>';
                        echo "<p>If you don't have a login, please <a href='register.php'>register</a></p>";
                }
?>      
 </body>
</html>
