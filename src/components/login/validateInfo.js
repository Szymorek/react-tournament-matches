export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be at least 6 characters long'
    }

    return errors
}