import { Redirect } from "react-router"
import {createContext, useContext} from 'react'


export default function handleLogin(values) {
    fetch("http://127.0.0.1:8080/api/v1/users/login", {
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
            }
        })
        .then(data => {
            if (data) {
                localStorage.setItem('token', data.token)
            }
        })
}