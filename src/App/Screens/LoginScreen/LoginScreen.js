import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import XepelinLogo from '../../Assets/xepelin-vertical.webp'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import Snackbar from '@mui/material/Snackbar';
import { auth } from '../../firebase-config'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import './LoginScreen.css'

const LoginScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = React.useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) history.push('/gsheet')
    })

    const showMessage = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            
            if(user) history.push('/gsheet')
        } catch (error) {
            showMessage()
            console.log(error)
        }
    }

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

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
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Error al iniciar sesión. Por favor revisa tus datos e inténtalo de nuevo."
                    action={action}
                />
            </div>
    )
}

export default withRouter(LoginScreen)