import "./styles.css";
import Header from "./Header";
import { render } from "react-dom";

export default function App() {
  let subscribers = [
    {
      Id: 1,
      Name: "siva",
      Phone: 6360863897
    },
    {
      Id: 1,
      Name: "sankari",
      Phone: 8754340858
    }
  ];

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
        {subscribers.map((sub) => {
          return (
            <div key={sub.Id} className="grid-container">
              <span className="grid-item">{sub.Name}</span>
              <span className="grid-item">{sub.Phone}</span>
              <button className="deleteButton">Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
