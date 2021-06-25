export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    } else if (values.username.length < 3) {
        errors.username = 'Username needs to be at least 3 characters long'
    }

    if(!values.firstName.trim()) {
        errors.firstName = "Name required"
    } else if (values.username.length < 3) {
        errors.password = 'First Name needs to be at least 3 characters long'
    }

    if(!values.surname.trim()) {
        errors.surname = "Surname required"
    } else if (values.username.length < 3) {
        errors.password = 'Surname needs to be at least 3 characters long'
    }


    if(!values.email) {
        errors.email = "Email required"
    }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be at least 6 characters long'
    }

    if(!values.password2) {
        errors.password2 = 'Password is required'
    }

    if(values.password !== values.password2) {
        errors.password2 = 'Passwords do not match'
    }

    return errors
}