import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    // BEM namin conventions
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
        {/* sidebar */}
        {/* chats */}
      </div>
    </div>
  );
}

export default App;
