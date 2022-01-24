import React, { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { DataContext } from "./context";

function App() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        loading,
        setData,
        setError,
        setLoading,
      }}
    >
      <div className="App">
        <div className="container">
          Container
          <Component1 />
          <Component2 />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
