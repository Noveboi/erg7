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

//SQL Query
// $sql = "SELECT AVG(rating) FROM reviews WHERE LOWER(disc_name) LIKE '%vol._3__bottom of the barrel%'";
$sql = "SELECT rating FROM reviews WHERE LOWER(disc_name) LIKE '%vol._3__bottom of the barrel%'";

$query = $conn->query($sql);

if($query->num_rows > 0) {
	$sum = 0;
	while($row = $query->fetch_assoc()) {
		$sum += $row['rating'];
	}

	echo json_encode($sum/$query->num_rows, JSON_HEX_TAG);
}
	
?>
