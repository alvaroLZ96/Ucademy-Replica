import { Outlet } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
