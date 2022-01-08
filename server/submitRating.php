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
$birthyear = $_POST['birthyear'];

//Dummy values for debug (make sure to comment)
// $discname = "Bopz Vol. 2";
// $reldate = "2021-01-06";
// $uname = "noveboi";
// $reviewtext = "Bopz is very cool I really like it!";
// $rating = 4;
// $birthyear = 2003;

//DEBUG: Print POST values
echo "<pre>";
print_r($_POST);
echo "</pre>";

//SQL Query
$sql = "INSERT INTO reviews (disc_name, reldate, uname, reviewtext, rating, birthyear) VALUES
		('$discname', '$reldate', '$uname', '$reviewtext', '$rating', '$birthyear')";

if($conn->query($sql) === TRUE)
{
	echo "Review row created succesfully"; 
} else{
	echo $conn->error;
}

// exit();
?>