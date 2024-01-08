import './App.css';
import Dashboard from './components/Dashboard';
import Dashboard2 from './components/Dashboard2';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';

function App() {
  return (
    <div className='flex flex-row h-fit w-screen'>
      <div>
        <Sidebar2/>
      </div>

      <div className='w-full'>
        <Navbar/>
        <Dashboard2/>
      </div>
    </div>
  );
}

export default App;
