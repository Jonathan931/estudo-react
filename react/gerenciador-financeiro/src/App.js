import React from "react";
import Root from "./screens";
import "antd/dist/antd.css";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Root />
      <GlobalStyles />
    </div>
  );
}

export default App;
