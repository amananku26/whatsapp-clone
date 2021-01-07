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
                    <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="fblogo" />
                    {/* <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fbtext" /> */}
                </div>
                <Button type="submit" onClick={signin} >Sign In</Button>
            </div>
        </div>
    )
}

export default Login