import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { UserContext } from "./Contexts/UserContext";
import { useSessionStorage } from "./Hooks/useSessionStorage";
import { PrivateGuard } from "./RouteGuards/private";
import { Preloader } from "./components/Common/Preloader";


const Header = lazy(() => import("./components/Common/Header"));
const Footer = lazy(() => import("./components/Common/Footer"));
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home/Home")), 1000);
  });
});

const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Catalog = lazy(() => import("./components/Catalog/Catalog"));
const Create = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./components/Create/Create")), 1000)
}));
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
