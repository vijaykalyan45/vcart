import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router';

import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './Contact';
import Cart from './components/cart';
const LazyProduct1=React.lazy(()=>import ('./components/Product1'))
const LazyProduct=React.lazy(()=>import('./components/Product'))
const LazyAbout=React.lazy(()=>import ('./components/About'))

function App() {
  return (
    <>
    
    <Navbar/>
<Routes>
  
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/product' element={ <React.Suspense fallback="loading..."><LazyProduct /></React.Suspense>}/>
     <Route exact path='/about' element={<React.Suspense fallback="loading.."><LazyAbout/></React.Suspense> } />
    
   <Route  exact path="/cart" element={<Cart/>}/>
   <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/product1/:id' element={<React.Suspense fallback="loading.."><LazyProduct1/></React.Suspense>}/>
      </Routes>
 
    </>
  );
}

export default App;
