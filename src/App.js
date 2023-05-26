import { Outlet } from "react-router-dom";
import GoToTop from "./components/GoToTop/GoToTop";
import  "./components/styles/Global.css"
import "./components/styles/Pages.css"

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
