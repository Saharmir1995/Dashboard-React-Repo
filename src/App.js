import './App.css';
import router from './router/router'
import { RouterProvider } from "react-router-dom";
import React from 'react';
// import { Provider } from 'react-redux'
// import { Store } from './redux/store'
// store={Store}


function App() {
  return (

    
      <RouterProvider router={router} />
    
  );
}

export default App;
