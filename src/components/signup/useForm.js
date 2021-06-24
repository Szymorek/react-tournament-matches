import { EmojiObjects } from '@material-ui/icons'
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
    const [open, setOpen] = useState(false)

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
            setOpen(true)
        }
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback && callback()
        }
    })

    return { handleChange, values , handleSubmit, errors, open, setOpen }
}

export default useForm