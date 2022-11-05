import Benefit from "./mainBenefit/mainBenefit";
import Company from "./mainCompany/mainCompany";
import Contacts from "./mainContacts/mainContacts";
import Industries from "./mainIndustries/mainIndustries";
import Main from "./main/main";
import News from "./mainNews/mainNews";
import Products from "./mainProducts/mainProducts";
import "./mainPage.scss";

export default function MainPage() {
      return (
            <>
                  <Main />
                  <Industries />
                  <Products />
                  <Benefit />
                  <Company />
                  <News />
                  <Contacts />
            </>
      );
}
