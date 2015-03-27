function validateForm() {
	var x = document.forms["LoginForm"]["user"].value;
   	var y = document.forms["LoginForm"]["pwd"].value;
    if ( (x.toLowerCase() != "demo" || y != "demo") && (x.toLowerCase() != "migdad" || y != "password") ) {
        alert("Invalid username & password combination");
        return false;
    }
}
