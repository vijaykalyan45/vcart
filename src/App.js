
import './App.css';
import { Routes,Route} from 'react-router';

import Navbar from './components/Navbar'
import Home from './components/Home';
import Product from './components/Product';
import Product1 from './components/Product1';
import Cart from './components/cart';

function App() {
  return (
    <>
    
    <Navbar/>
<Routes>
  
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/product' element={ <Product/>}/>
     
    
   <Route  exact path="/cart" element={<Cart/>}/>
      <Route exact path='/product1/:id' element={<Product1/>}/>
      </Routes>
 
    </>
  );
}

export default App;
