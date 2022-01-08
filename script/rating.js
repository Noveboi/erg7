function checkMe(){   
    var errors="";

    //Έλεγχος εισόδου του χρήστη στο πεδίο του Album Name
    discname = document.getElementById("disc").value;
    if ( /^CITY MORGUE VOLUME 3: BOTTOM OF THE BARREL$/.test(discname) ){
        document.getElementById("disc").style="";
    } else {
        document.getElementById("disc").style="border: 3px dotted red;";
        errors+="\nHint: The rest of the album name must be 'BOTTOM OF THE BARREL'. \n";
    }

    //Έλεγχος εισόδου του χρήστη στο πεδίο του Username
    username = document.getElementById("username").value;
    if ( /^([a-zA-Z0-9_]{3,15})+$/.test(username) ){
        document.getElementById("username").style="";
    } else {
        document.getElementById("username").style="border: 3px dotted red;";
        errors+="\nError: Your username must have at least 3 characters and contain latin letters, numbers or an underscore. ";
    }

    //Εκτύπωση των λαθών της φόρμας, σε περίπτωση που έχει
    if (errors.length > 0){
        alert(errors);
    }

    //Αποστολή των δεδομένων της φόρμας, αν δεν έχει λάθη, έχει πατηθεί το login button κουμπί και έχουν συμπληρωθεί τα 2 checkbox πεδία
    if (errors.length == 0){
        document.getElementById("rateNew").submit();
    }
}
document.getElementById("btn2").addEventListener( "click", function(){checkMe();} );