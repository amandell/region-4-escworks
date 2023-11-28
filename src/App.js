import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductList from './components/ProductSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/:id' element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
