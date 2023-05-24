import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Navbar";
import  "./components/styles/Global.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
