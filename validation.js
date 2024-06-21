function formvalidate() {

    let isValid = true;

    // Get form fields
    const firstName = document.getElementById("txtFirstName").value.trim();
    const lastName = document.getElementById("txtLastName").value.trim();
    const dob = document.getElementById('txtDate').value.trim();
    const phone = document.getElementById("txtPhone").value.trim();
    const email = document.getElementById("txtEmail").value.trim();
    const password = document.getElementById("txtPassword").value.trim();
    
    //Get Radio button values
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked
    const others = document.getElementById('others').checked

    //Get checkbox Values
    const confirm = document.getElementById('confirmbtn').checked

    // Get error labels
    const nameError = document.getElementById("nameError");
    const genderError = document.getElementById('genderError');
    const dateError = document.getElementById('dateError');
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById('confirmError');

    // Clear previous error messages
    nameError.textContent = "";
    genderError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    dateError.textContent = "";
    

    // Validate First Name and Last Name
    if (firstName === "" || lastName === "") {
        nameError.textContent = "First name and last name are required.";
        isValid = false;
    }


    //validation Gender
    if(!male && !female && !others){
        genderError.textContent = "Gender is required"
        isValid = false;
    }


    //validation date of birth
    if (dob === "") {
        dateError.textContent = "Date of Birth is required.";
        isValid = false;
    } else {
        const today = new Date();
        const dobDate = new Date(dob);
        const ageDiff = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        const dayDiff = today.getDate() - dobDate.getDate();

        if (ageDiff < 18 || (ageDiff === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
            dateError.textContent = "You must be at least 18 years old!";
            isValid = false;
        }
    }
    

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
    }


    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }



    // Validate Password
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one underscore.";
        isValid = false;
    }

    //validation checkbox
    if(!confirm){
        confirmError.textContent = "You must confirm submission"
        isValid = false;
    }

    

// end of validation



    if (isValid) {
        let gender = "";
        if (male) {
            gender = "Male";
        } else if (female) {
            gender = "Female";
        } else if (others) {
            gender = "Others";
        }

        alert(`\nFirst Name: ${firstName}\n
            Last Name: ${lastName}\n
            Gender: ${gender}\n
            Phone No.: ${phone}\n
            Email: ${email}\n
            Password: ${password}`);
    }

    return isValid;

}
