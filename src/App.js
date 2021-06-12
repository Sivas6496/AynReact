import "./styles.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
      </div>
    </div>
  );
}
