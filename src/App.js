import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blogs from "./Pages/Blogs/Blogs";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RequarAuth from "./Pages/RequarAuth/RequarAuth";
import Footer from "./sheard/Footer/Footer";
import Header from "./sheard/Header/Header";
import NotFound from "./sheard/NotFound/NotFound";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/checkout"
          element={
            <RequarAuth>
              <CheckOut></CheckOut>
            </RequarAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
