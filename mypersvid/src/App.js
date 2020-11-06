import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import routes, { renderRoutes } from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

    return (

        <div id='principal'>
             <CssBaseline />
            {renderRoutes(routes)}
        </div>
    );
}

export default App;
