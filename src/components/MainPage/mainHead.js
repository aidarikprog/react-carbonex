import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function MainHead (){
      return(
            <>
                  <Header/>
                  <Outlet/>
                  <Footer/>
            </>
      )
}