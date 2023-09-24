import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OrderSummary from "./pages/summary/OrderSummary";
import SelectedItemsCTXProvider from "./context/SelectedItemsCTX";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <div className="App">
      <SelectedItemsCTXProvider>
        <OrderEntry />
      </SelectedItemsCTXProvider>
    </div>
  );
}

export default App;
