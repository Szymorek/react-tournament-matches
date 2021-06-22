import {useState, useEffect} from 'react'
import submitForm from './submitForm'

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
        if(errors != null && submitForm(values)) {
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