<?php
    try{
        $db_server ="localhost";
        $db_user ="root";
        $db_password ="765500";
        $db_name  ="parallax";
        $conn ="";
    
        $conn = mysqli_connect($db_server,$db_user,$db_password,$db_name);
        // if ($conn){
        //     echo "You are connected!!!!";
        // }
        // else {
        //     echo "Not Connect to the database!!!";
        // }
    }
    catch(Exception $e){
        echo "Database Connection Error!!!";
    }
    
?>