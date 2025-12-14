import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/css/bulma.min.css";

import Header from "./Header";
import Login from "./Login";
import Planning from "./Planning";
import Menu from "./Menu";

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={ !token ? (
            <Login setToken={setToken} />
          ) : (
            <Planning userInfos={token} />
          )}/>
        <Route path="/planning" element={<Planning userInfos={token} />} />
        <Route path="/portfolio" element={<Planning userInfos={token} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
