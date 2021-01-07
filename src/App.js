import "./App.css";
import Chat from "./Components/Chat/Chat.jsx";
import Sidebar from "./Components/Sidebar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useSelector, useDispatch } from "react-redux";

function App() {
  var data = useSelector((state) => state.PostData.UserData);
  const user = data;
  return (
    // BEM namin conventions
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            {/* <Switch> */}
            <Sidebar />
            {/* <Chat /> */}
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            {/* <Route path="/" >
              <Chat /> 
            </Route> */}
            {/* </Switch> */}
          </BrowserRouter>
        </div>
      )}

      {/* sidebar */}
      {/* chats */}
    </div>
  );
}

export default App;
