import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import routes, { renderRoutes } from './routes';


const App = () => {

    return (
      
      <>
       {renderRoutes(routes)}
      </>
    );
  }
  
  export default App;
  