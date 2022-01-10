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
} else {
	echo "Connected epicly";
}

//Get POSTed form data
//(Βαλε τα corresponding names στα form inputs)
$discName = $_POST['disc'];
$reldate = $_POST['reldate'];
$uname = $_POST['username'];
$reviewtext = $_POST['review'];
$rating = $_POST['rating'];
$birthyear = $_POST['birthyear'];

//SQL Queries
$sql = "INSERT INTO reviews (disc_name, reldate, uname, reviewtext, rating, birthyear) VALUES
		('$discName', '$reldate', '$uname', \"$reviewtext\", $rating, $birthyear)";

if($conn->query($sql) === TRUE)
{
	echo "Review row created succesfully"; 
	header("Location: contest.html");
	exit();	
} else{
	echo $conn->error;
}

?>