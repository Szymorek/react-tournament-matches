import {useState, useEffect} from 'react'
import * as Constants from '../../utils/Constants.js'

const useForm = ( callback, validateInfo ) => {
    const [values, setValues] = useState({
        username: '',
        firstName: '',
        surname: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [alertInfo, setAlertInfo] = useState({open: false})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validateInfo(values))

        if(Object.keys(errors).length === 0) {
            submitForm(values)
            setIsSubmitting(true)
        }
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback && callback()
        }
    })

    const submitForm = (values) => {
        fetch(Constants.API_URL + "users/register", {
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

    return { handleChange, values , handleSubmit, errors, alertInfo, setAlertInfo }
}

export default useForm