import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>} />
        <Route path='/s' element={<SearchProduct/>} />
        <Route path='/d' element={<DeleteProduct/>} />
        <Route path='/v' element={<ViewAll/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
