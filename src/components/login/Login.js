import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from "../../firebase"



const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    

    return (
        <div className="login">
			<div className="login-container">
				<img
					src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
					alt=""
				/>
				<h1>Sign in to Slack-Clone</h1>
				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
    )
}

export default Login
