import React from 'react';
import { Outlet } from 'react-router';
import Background from '../components-layout/Background/Background';
import Frame from './Frame/Frame';
import './layout.style.css';

const Layout = () => {
  return (
    <React.Fragment>
      
      <div>
        <Background />
      </div>

      <div className='total__width'>

        <div>
          <Frame />
        </div>

        <div className='index__absolute'>
          <main>
            <Outlet />
          </main>
        </div>

      </div>

    </React.Fragment>
  )
}

export default Layout;