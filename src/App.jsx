import { List } from "./components/List/List";
import { Cond } from "./components/Cond/Cond";
import { Request } from "./components/Request/Request";
import { List1 } from "./components/Domaska/List1";
 
function App() {
  return (
    <div className="App">
      <List1></List1>
      <List></List>
      <Cond></Cond>
      <hr />
      <Request></Request>

    </div>
  );
}

export default App;
