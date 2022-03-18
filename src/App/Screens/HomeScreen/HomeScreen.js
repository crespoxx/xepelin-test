import React from 'react'
import './HomeScreen.css'
import { withRouter } from 'react-router-dom'
import Button from '@mui/material/Button';
import XepelinLogo from '../../Assets/xepelin-vertical.webp'

const HomeScreen = ({history}) => {
    return(
            <div className="homeCard">
                <img src={XepelinLogo} alt="logo" style={{width: 150}} />
                <p className='homeCardTitle'>¡Bienvenido!</p>
                <p>Presiona el siguiente botón para iniciar sesión</p>
                <Button variant="contained" onClick={() => history.push('/login')}>Iniciar Sesión</Button>
            </div>
    )
}

export default withRouter(HomeScreen)