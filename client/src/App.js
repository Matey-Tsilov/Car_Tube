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
import MyListings from "./components/MyListings/MyListings";

import { Routes, Route } from "react-router-dom";

import { UserContext } from "./Contexts/UserContext";
import { useSessionStorage } from "./Hooks/useSessionStorage";

function App() {
  const [user, setUser] = useSessionStorage({});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/create" element={<Create />} />
            <Route path="/cars/edit/:id" element={<Edit />} />
            <Route path="/cars/:id" element={<Details />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-listings" element={<MyListings />} />
          </Routes>
        </main>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
