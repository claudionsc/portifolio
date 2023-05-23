import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import  "./components/styles/Global.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
