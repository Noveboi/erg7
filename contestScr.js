//Get localStorage items from submitRating.php and create table

//Send a GET HTTP Request to getData.php and store the PHP array in phpData var.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        sessionStorage.setItem('phpdata', this.responseText)
    } 
}
xhr.open("get", "getData.php", true);
xhr.send();

var data = (sessionStorage.getItem('phpdata') != null) ? sessionStorage.getItem('phpdata') : "";
console.log(typeof data);

console.log(data);

data = data.replace(data[0],"");
while(data.includes('\"\"')) {
    data = data.replace('\"\"', ",");
}
data = data.replace('"', "");

console.log(data);
console.log("hello");
