import './App.css';
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Tindercards from './Tindercards';
import Swipebuttons from './Swipebuttons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';


function App() {
  return (
    <div className="App">      
      <Router>      
      <Switch>
      <Route path="/chats/:person">
        <Header backButton="/chats" />
         <ChatScreen />
       </Route>    
        <Route path="/chats">
        <Header backButton="/" />
         <Chats />
       </Route>
       <Route path="/">
          <Header />
         <Tindercards />
          <Swipebuttons />
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;

 {/* <h1>Nitish</h1> */}
     {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-IDmVsmakmey2CUCZQUwr0FvKp60Cl3rxA&usqp=CAU" alt=""/> */}
