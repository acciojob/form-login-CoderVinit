function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing

    // Retrieve values using document.forms
    let form = document.forms["form1"];
    let firstName = form["fname"].value.trim();
    let lastName = form["lname"].value.trim();

    // Check if both fields are filled
    if (firstName && lastName) {
        alert(`${firstName} ${lastName}`);
    } else {
        alert("Please enter both First Name and Last Name.");
    }
}

// Attach event listener to the form to call getFormvalue on submit
document.getElementById("form1").addEventListener("submit", getFormvalue);
