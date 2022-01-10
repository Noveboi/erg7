//Refresh once on page load for AJAX to work properly
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

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

//String formatting...
var it = 0;

data = data.replace(data[0],"");
while(data.includes('\"\"')) {
    data = data.replace('\"\"', ",");
    it++;
}
data = data.replace('"', "");

var datasub = data;
var commaindex = 0;
var iter = 0;

var userArray = [];
var tempArray = [];

for(let i = 0; i <= it; i++) {
    
    var nextsubstart = (i != 0) ? data.indexOf(",", commaindex) + 1: 0;
    if(i != it) {
        commaindex = data.indexOf(",", nextsubstart);
    } else {
        tempArray.push(data.substring(commaindex + 1, data.length));
        t = [tempArray[0], tempArray[1]];
        userArray.push(t);
    }
    datasub = data.substring(nextsubstart, commaindex);
    if(i % 2 == 0 && iter < 2) {
        iter++;
        tempArray.push(datasub); //Pushes username
    }
    else if (i % 2 == 1 && iter < 2) {
        iter++;
        tempArray.push(Number(datasub)); //Pushes birthyear
    }
    else {
        iter = 0;
        t = [tempArray[0], tempArray[1]];
        userArray.push(t);
        tempArray.pop();
        tempArray.pop();
        tempArray.push(datasub); //Pushes username
        iter++;
    }
}

//Data translation from PHP to JS over, time to display this data!
var winners = [];

for(user of userArray) {
    if(user[1] == 2003) {
        winners.push(user[0]);
    }
}

for(winner of winners) {
    var winnerName = document.createElement('h2');
    winnerName.innerHTML = winner;
    document.getElementById('winners').appendChild(winnerName);
}
