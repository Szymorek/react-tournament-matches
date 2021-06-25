import {useState, useEffect} from 'react'
import * as Constants from '../../utils/Constants.js'


const useLogin = ( callback ) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [alertInfo, setAlertInfo] = useState({})

    const handleLogin = (values) => {
        if (values.username && values.password)
        fetch(Constants.API_URL + "users/login", {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
            .then(response => {
                if (response.ok) {
                    setAlertInfo({
                        open: true,
                        message: "Successfully logged in",
                        severity: "success"
                    }
                    )
                    return response.json()
                } else if (response.status === 401) {
                    setAlertInfo({
                        open: true,
                        message: "Incorrect credentials",
                        severity: "warning"
                    })
                } else {
                    setAlertInfo({
                        open: true,
                        message: "Server returned error!",
                        severity: "error"
                    })
                }
            })
            .then(data => {
                if (data) {
                    localStorage.setItem('token', data.token)
                    window.location.href="/";
                }
            })
    }

    const validateInfo = (values) => {
        let errors = {}

        if(!values.username.trim()) {
            errors.username = "Username required"
        } else if (values.username.length < 3) {
            errors.username = "Usernames are at least 3 characters long"
        }
        
        if(!values.password) {
            errors.password = 'Password is required'
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be at least 6 characters long'
        }
    
        return errors
    }

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

        if(errors != null && handleLogin(values)) {
            setIsSubmitting(true)
            
        }
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    })

    return { handleChange, values , handleSubmit, errors, alertInfo, setAlertInfo }
}

export default useLogin