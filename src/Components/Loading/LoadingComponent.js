import React from 'react'
import classes from './LoadingComponent.module.css'
import comworkLogo from '../../assets/images/login.svg'

const LoadingComponent = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div className={classes.mainContainer} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div>
                    <img className={classes.logoImage} alt="loading" src={comworkLogo} />

                </div>
            </div>
        </div>

    )
}

export default LoadingComponent
