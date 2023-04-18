import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router';

import Navbar from './components/Navbar'
import Home from './components/Home';

import Cart from './components/cart';
import Login from './components/Login';
import { AuthProvider } from './components/Auth';
const LazyProduct1=React.lazy(()=>import ('./components/Product1'))
const LazyProduct=React.lazy(()=>import('./components/Product'))
const LazyAbout=React.lazy(()=>import ('./components/About'))
const  LazyContact=React.lazy(()=>import('./Contact'))

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
<Routes>
  
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/product' element={ <React.Suspense fallback="...."><LazyProduct /></React.Suspense>}/>
     <Route exact path='/about'  element={<React.Suspense fallback="...."><LazyAbout/></React.Suspense> } />
    
   <Route  exact path="/cart" element={<Cart/>}/>
   <Route exact path='/contact' element={<React.Suspense fallback="...."><LazyContact/></React.Suspense>}/>
   <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/product1/:id' element={<React.Suspense  fallback="...."><LazyProduct1/></React.Suspense>}/>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
