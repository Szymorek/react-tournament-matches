export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    if(!values.firstName.trim()) {
        errors.firstName = "Name required"
    }

    if(!values.surname.trim()) {
        errors.surname = "Surname required"
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
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return errors
}