import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  "./components/styles/Global.css"
import "./components/styles/Pages.css"

function App() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
