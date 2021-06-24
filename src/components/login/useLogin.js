import {useState, useEffect} from 'react'
import * as Constants from '../../utils/consts.js'



const useLogin = ( callback ) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleLogin = (values) => {
        console.log(`body - ${values.username};${values.password}`)
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
                    return response.json()
                } else {
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

        console.log("Checking errors")
        if(errors != null && handleLogin(values)) {
            setIsSubmitting(true)
            
        }
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    })

    return { handleChange, values , handleSubmit, errors }
}

export default useLogin