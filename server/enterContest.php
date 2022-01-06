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

//Dummy variable
$dob = "2003-05-07";

//For reviewid foreign key, make hidden input in form, and change it accordingly with JS (NVM use AJAX).

$sql = "INSERT INTO contestants (reviewid, dob) VALUES
		('changethis', '$dob')";
?>