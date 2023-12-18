import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import InitialPage from './views/InitialPage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <InitialPage/>
    </div>
  );
}

export default App;
