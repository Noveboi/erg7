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

$getdata = "SELECT uname, birthyear FROM reviews";

$result = $conn->query($getdata);
$reviewamt = 0;
$finalArray = array();

if($result->num_rows > 0)
{
	while($row = $result->fetch_assoc()) {
		$reviewamt++;
		// array_push($finalArray, array($row['uname'], $row['birthyear']));
        echo json_encode($row['uname']);
        echo json_encode($row['birthyear']);
	}
} else {
    echo "no results";
}

// $q = $_REQUEST['q'];
// if($q !== "") {
// 	if($q == "sendthegoodstuff") {
// 		echo json_encode($finalArray, JSON_OBJECT_AS_ARRAY);
//         echo json_encode("test");
//         echo json_encode("test2");
// 	} else {
// 		echo "yikes";
// 	}
// }
?>