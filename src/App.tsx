import React from 'react';
import './App.css';
import { ProductsList }from '@/modules/products';
import { Menu } from '@/modules/menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Menu />
      <ProductsList/>
      <ToastContainer />
    </div>
  );
}

export default App;
