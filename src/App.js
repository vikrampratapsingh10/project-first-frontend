import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/registration/RegistrationPage";
import HomePage from "./components/home/HomePage";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<HomePage />}>
          <Route path="/" element={<Carousel/>} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
