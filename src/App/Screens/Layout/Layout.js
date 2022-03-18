import React from 'react'
import ResponsiveAppBar from './Components/AppBar'

const Layout = ({children, history}) => {
    return (
        <>
        <ResponsiveAppBar />
        <div style={{marginTop: 130}}>
            {children}
        </div>        
        </>
        
    )
}

export default Layout