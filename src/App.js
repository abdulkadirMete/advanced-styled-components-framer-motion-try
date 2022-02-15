import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/Home";
import { PricingPage } from "./pages/PricingPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/signup'  component={SignupPage}></Route>
        <Route path='/pricing'  component={PricingPage}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
