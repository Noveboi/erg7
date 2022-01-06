<?php 
//Establish connection to SQL Server and submit form data

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "geniki_erg";

$conn = new mysqli($hostname, $username, $password, $dbname);

if($conn->connect_error)
{
	die("Connection failed: " . $conn->connect_error);
}
echo "Connection successful";

//Get POSTed form data
//(Βαλε τα corresponding names στα form inputs)
$discName = $_POST['disc'];
$reldate = $_POST['reldate'];
$uname = $_POST['username'];
$reviewtext = $_POST['review'];
$rating = $_POST['rating'];

//DEBUG: Print POST values
echo "<pre>";
print_r($_POST);
echo "</pre>";

// header("Location: contest.html");
// exit();
?>