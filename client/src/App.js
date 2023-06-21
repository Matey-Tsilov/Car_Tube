import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Search from "./components/Search/Search";
import Details from "./components/Catalog/Details";




function App() {
  return (<>
<Header />
  
<main id="site-content">

  <Home />
  <Login />
  <Register />
  <Catalog />
  <Create />
  <Edit />
  <Search />
  <Details />

</main>
<Footer />
</>
);
}

export default App;
