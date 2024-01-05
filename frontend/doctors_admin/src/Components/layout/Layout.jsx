import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar'; // Updated import statement

export function Layout() {
  return (
    <div>
      <header className=' w-full'>
        <NavigationBar />
      </header>
      <main className=''>
        <div className=''>
          <Outlet />
        </div>
      </main>
    </div>
  );
}