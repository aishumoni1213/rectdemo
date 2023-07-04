import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'
import Fundemo from './fundemo';
import Counter from './counter';
import Imagesearch from './imagesearch';

import Todolist from './Todo/Todolist';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/counter">Counter</Link> <br></br>
        <Link to="/todo">todo</Link><br></br>
        <Link to="/imageserach">imageserach</Link>
      </nav>
      <Routes>
        <Route path="counter"  element={<Counter></Counter>}></Route>
        <Route path="todo" element={<Todolist></Todolist>}></Route>
        <Route path="imageserach" element={<Imagesearch></Imagesearch>}></Route>
      </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
