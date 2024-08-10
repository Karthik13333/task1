function Validate(values) {
    let error = {}

    const phone_pattern = /^(?=.?[0-9])/;
    const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.?[A-Z])/;
n


    if (values.email === "") {
        error.email = "name should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }



    if (values.phone === "") {
        error.phone = "Name should not be  empty"
    } else if (!phone_pattern.test(values.phone)) {
        error.phone = "password didn't match"
    } else {
        error.phone = ""
    }


    if (values.password === "") {
        error.password = "Name should not be  empty"
    } else if (!password_pattern.test(values.password)) {
        error.password = "password didn't match"
    } else {
        error.password = ""
    }


    if (values.firstname === "") {
        error.firstname = "Name should not be  empty"
    } else{
        error.firstname = ""
    }

    
    if (values.city === "") {
        error.city = "Name should not be  empty"
    } else {
        error.city = ""
    }






    return error;
}
export default Validate;