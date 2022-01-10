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

$getdata = "SELECT uname, birthyear FROM reviews WHERE LOWER(disc_name) LIKE '%vol._3__bottom of the barrel%'";

$result = $conn->query($getdata);

if($result->num_rows > 0)
{
	while($row = $result->fetch_assoc()) {
        echo json_encode($row['uname']);
        echo json_encode($row['birthyear']);
	}
} else {
    echo "no results";
}
?>