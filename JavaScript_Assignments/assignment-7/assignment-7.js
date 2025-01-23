
function validateForm() {
    let name, email, age;
    var status = true;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    age = document.getElementById('age').value;

    if (name == "") {
        document.getElementById('namespan').innerHTML = "field cannot be empty";
        status = false;
    }

    let mailregex = /^[a-zA-Z0-9._]+@+[a-z]+.+[a-z{2,6}]$/;
    if (!mailregex.test(email)) {
        status = false;
        document.getElementById('emailspan').innerHTML = "Enter a valid mail!";
    }

    if (age != "" && age < 18) {
        document.getElementById('agespan').innerHTML = "Too young to join the club!";
        status = false;
    }

    return status;


    // if (name == "") {
    //     document.getElementById('namespan').innerHTML = "field cannot be empty";
    //     status = false;
    // }

    // return status;


}