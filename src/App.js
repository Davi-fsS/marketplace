import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import InitialPage from './views/InitialPage';
import ProductPage from './views/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InitialPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
