import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import InitialPage from './views/InitialPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InitialPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
