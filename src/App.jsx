import { List } from "./components/List/List";
import { Cond } from "./components/Cond/Cond";
import { Request } from "./components/Request/Request";

function App() {
  return (
    <div className="App">
      <List></List>
      <Cond></Cond>
      <hr />
      <Request></Request>
    </div>
  );
}

export default App;
