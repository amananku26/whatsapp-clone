import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // BEM namin conventions
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Switch>
            <Sidebar />
            <Chat />
            <Route path="/rooms/:roomId" render={() => <Chat />} />
            <Route path="/" extact render={() => <Chat />} />
          </Switch>
        </BrowserRouter>
        {/* sidebar */}
        {/* chats */}
      </div>
    </div>
  );
}

export default App;
