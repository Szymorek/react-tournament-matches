import * as Constants from '../../utils/Constants.js'

const submitForm = (values, setAlertInfo) => {
    fetch(Constants.API_URL + "register", {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: values.username,
            name: values.firstName,
            surname: values.surname,
            email: values.email,
            password: values.password
        })
    })
        .then(response => {
            if (response.ok) {
                window.location.href="/login";
                setAlertInfo ({
                    open: true,
                    message: "Successfully registered",
                    severity: "success"
                })
            } else if (response.status === 403) {
                setAlertInfo( {
                    open: true,
                    message: "Email or username already taken!",
                    severity: "warning"
                })
            } else {
                setAlertInfo( {
                    open: true,
                    message: "Server returned error!",
                    severity: "error"
                })
            }
        })
        .then(data => {
            if (data) {
            }
        })
}

export default submitForm