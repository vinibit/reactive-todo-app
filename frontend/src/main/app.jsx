import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Routes from './Routes'
import Menu from '../template/Menu'

const App = () => {
    return (
        <div className="container">            
            <Menu />
            <Routes />
        </div>
    )    
}

export default App