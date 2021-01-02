import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    // BEM namin conventions
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        {/* sidebar */}
        {/* chats */}
      </div>
    </div>
  );
}

export default App;
