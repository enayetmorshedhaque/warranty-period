<?php
    // define variables and set to empty values
    $companyName = $email = $password = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(empty($_POST['companyName'])){
            echo "
                <script type=\"text/javascript\">
                    document.getElementById('companyName').style.border = '1px solid red';
                </script>
            ";
        } else {
            $companyName = test_input($_POST["companyName"]);
            echo "
                <script type=\"text/javascript\">
                    document.getElementById('companyName').style.border = '1px solid green';
                </script>
            ";
        }
    }
?>