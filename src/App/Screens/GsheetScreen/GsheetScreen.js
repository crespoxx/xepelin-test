import React from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import Button from '@mui/material/Button';
const Gsheet = ({history}) => {

    onAuthStateChanged(auth, (currentUser) => {
        if(!currentUser) history.push('login')
    })
    return (
        <>
        <Button variant="contained" style={{marginBottom: 20, marginLeft: 20}} onClick={() => history.push('/home')}>VOLVER AL HOME</Button>
        <iframe
            title='SpreadSheet'
            src="https://docs.google.com/spreadsheets/d/1NCGNTkq5b6lYYGV78FwrgUi7_AF5As0kzwVQGz9onZg/edit?usp=sharing?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            style={{width: '99%', height: '70vh', marginLeft: '0.5%'}}
            >
        </iframe>
        </>
        
    )
}

export default withRouter(Gsheet)