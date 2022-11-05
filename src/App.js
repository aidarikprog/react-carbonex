import "./App.scss";

// import logo from "./logo.svg";
// import tel from "./tel.svg";

import Footer from "./components/footer/footer";
import MainPage from "./components/MainPage/mainPage";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/header/header";
import Company from "./components/company/company";
import Contacts from "./components/contact/contact";
import Industri from "./components/industries/industri";
import New from "./components/new/new";
import Product from "./components/product/product";
import MainHead from "./components/MainPage/mainHead";

function App() {
      return (
            <div className="App">
                  {/* <Header /> */}
                  <Routes>
                        <Route path="/" element={<MainHead />}>
                              <Route index element={<MainPage />} />
                              <Route path="industri" element={<Industri />} />
                              <Route path="product" element={<Product />} />
                              <Route path="company" element={<Company />} />
                              <Route path="news" element={<New />} />
                              <Route path="contact" element={<Contacts />} />
                        </Route>
                  </Routes>
                  {/* <Footer /> */}
            </div>
      );
}

export default App;
