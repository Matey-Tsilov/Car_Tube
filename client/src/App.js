import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

//import Header from "./components/Common/Header";
//import Footer from "./components/Common/Footer";
//import Home from "./components/Home/Home";
//import Login from "./components/Login/Login";
//import Register from "./components/Register/Register";
// import Catalog from "./components/Catalog/Catalog";
// import Create from "./components/Create/Create";
// import Edit from "./components/Edit/Edit";
// import Search from "./components/Search/Search";
// import Details from "./components/Catalog/Details";
// import MyListings from "./components/MyListings/MyListings";

import { UserContext } from "./Contexts/UserContext";
import { useSessionStorage } from "./Hooks/useSessionStorage";
import { PrivateGuard } from "./RouteGuards/private";
import { Preloader } from "./components/Common/Preloader";

const Home = lazy(() => import("./components/Home/Home"));
const Header = lazy(() => import("./components/Common/Header"));
const Footer = lazy(() => import("./components/Common/Footer"));
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Catalog = lazy(() => import("./components/Catalog/Catalog"));
const Create = lazy(() => import("./components/Create/Create"));
const Edit = lazy(() => import("./components/Edit/Edit"));
const Search = lazy(() => import("./components/Search/Search"));
const Details = lazy(() => import("./components/Catalog/Details"));
const MyListings = lazy(() => import("./components/MyListings/MyListings"));



function App() {
  const [user, setUser] = useSessionStorage({});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <main id="site-content">
          <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/:id" element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route element={<PrivateGuard />}>
              <Route path="/cars/create" element={<Create />} />
              <Route path="/cars/edit/:id" element={<Edit />} />
              <Route path="/my-listings" element={<MyListings />} />
            </Route>
          </Routes>
          </Suspense>
        </main>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
