import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "../../firebase.js"
import { useDispatch } from "react-redux"
import { setUserApi } from "../redux/Posts/ActionCreator"

function Login() {
    const dispatch = useDispatch()
    const signin = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch(setUserApi({ data: result.user }))
                console.log(result.user)
            })
            .catch(err => alert(err.message))
        console.log("yep we are here now")
    }
    return (
        <div className="login">
            <div className="login__panel">
                <div className="login__logo">
                    <img src="https://i.pinimg.com/originals/a2/dc/5c/a2dc5c3a8c443f7bce721542c2a98a2f.png" alt="whatsapplogo" />
                </div>
                <Button type="submit" onClick={signin} >Sign In</Button>
            </div>
        </div>
    )
}

export default Login