import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import XepelinLogo from '../../Assets/xepelin-vertical.webp'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config' 
import './LoginScreen.css'

const LoginScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) history.push('/gsheet')
    })

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            
            if(user) history.push('/gsheet')
        } catch (error) {
            console.log(error)
        }
    }

    return(
            <div className="loginCard">
                <img src={XepelinLogo} alt="logo" style={{width: 150}} />
                <p>Coloca tu email y tu contraseña para iniciar sesión</p>
                <div className='loginFormContainer'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' }
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} className="inputLoginForm" id="standard-basic" label="Email" variant="standard" required/>
                            <TextField value={password} onChange={(e) => setPassword(e.target.value)}  className="inputLoginForm" id="standard-basic" label="Contraseña" variant="standard" type="password" required/>
                            <Button className="submitButtonLoginForm" variant="contained" onClick={() => login()}>Iniciar Sesión</Button>
                            
                    </Box>
                </div>
                
            </div>
    )
}

export default withRouter(LoginScreen)