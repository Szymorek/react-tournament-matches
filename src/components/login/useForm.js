import {useState, useEffect} from 'react'
import handleLogin from './handleLogin'

const useForm = ( callback, validateInfo ) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)


    //  Handle input edits
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

export default useForm