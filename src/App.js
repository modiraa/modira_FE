import React from "react";
import WebViewLeft from "./components/public/WebViewLeft"
import RouteList from "./components/public/RouteList";
import './index.css';

function App() {
  return (
    <div className="wrap-app box">

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

