import "./styles.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <button>Add</button>
      <div>
        <span>Name</span>
        <br />
        <span>Phone</span>
      </div>
    </div>
  );
}
