import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex flex-row'>
      <div>
        <Sidebar/>
      </div>

      <div>
        <Navbar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
