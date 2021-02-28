import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase" 

export default function Login() {

    const signin = ()=> {
       auth.signInWithPopup(provider).then(result => console.log(result))
       .catch((error) =>alert(error.message))
    };
   
    return (
        <div className="login">
           <div className="login__container">
               <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" alt="/app" />
               <div className="login__text">
                   <h1>Sign in to WhatsApp</h1>
               </div>

               <Button type="submit" onClick={signin}>
                    Sign In With Google
               </Button>
           </div>
        </div>
    )
}

