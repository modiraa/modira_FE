import React from "react";
import WebViewLeft from "./components/WebViewLeft";
import RouteList from "./components/RouteList";

function App() {
  return (
    <div className="wrap-app">
      <div className="app-background-first-circle">

      </div>
      <div className="wrap-app-webview">
        <WebViewLeft />
      </div>
      <div className="wrap-app-appview">
        <RouteList />
      </div>
    </div>
  );
}

export default App;

