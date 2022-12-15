import "./App.css";
/* import ClassCounter from "./components/example-1/ClassCounter";
import HookCounter from "./components/example-1/HookCounter"; */
import HookCounterTwo from "./components/example-2/HookCounterTwo";
import ClassCounterTwo from "./components/example-2/ClassCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      <HookCounterTwo />
      <ClassCounterTwo />
    </div>
  );
}

export default App;
