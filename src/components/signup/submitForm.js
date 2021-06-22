import { Redirect } from "react-router"

export default function handleSubmit(values) {
    fetch("http://127.0.0.1:8080/api/v1/users/register", {
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
            console.log(response)
            if (response.ok) {
                return <Redirect to="/login" />
            }
        })
        .then(data => {
            if (data) {
            }
        })
}