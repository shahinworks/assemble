import React, { useEffect } from 'react';
import { routes } from './Routes/Routes';
import './App.css';

function App() {  return(
    <div className='App'>
      <routes isAuthorized={true} />
    </div>
  );
}

export default App;
