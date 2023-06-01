import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashbaord from './sections/dashboard/dashbaord';
import Tables from './sections/table/Tables';
import { useDispatch } from 'react-redux';
import { WindowWidth } from './state/reducers/WindowWidthReducer';

function App() {

  const dispatch = useDispatch();

  window.addEventListener('resize', () => {
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 900) {
      localStorage.setItem('sidebarWidth', '250')
      dispatch(WindowWidth({ value: windowInnerWidth - 250 }))
    } 
    else if (windowInnerWidth < 500) {
      dispatch(WindowWidth({ value: windowInnerWidth })) 
    }
    else {
      localStorage.setItem('sidebarWidth', '70')
      dispatch(WindowWidth({ value: windowInnerWidth - 70 }))
    }
  })


  useEffect(() => {
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 900) {
      localStorage.setItem('sidebarWidth', '250')
      dispatch(WindowWidth({ value: windowInnerWidth - 250 }))
    } 
    else if (windowInnerWidth < 500) {
      dispatch(WindowWidth({ value: windowInnerWidth })) 
    }
    else {
      localStorage.setItem('sidebarWidth', '70')
      dispatch(WindowWidth({ value: windowInnerWidth - 70 }))
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Dashbaord />} />
      <Route path='/tables' element={<Tables />} />
    </Routes>
  );
}

export default App;
