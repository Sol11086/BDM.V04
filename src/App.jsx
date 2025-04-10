import { Routes, Route } from "react-router-dom";
import NavbarCustom from "./Components/navBar"; 
import ContactList from "./Components/ContactList";
import MiPerfil from "./Components/MiPerfil";
import Login from "./Components/Login";
import EditUser from "./Components/EditUser";
import Filters from "./Components/Filters";
import Galeria from "./Components/Galeria";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04030D] via-[#0A062B] to-[#070540]">
      <NavbarCustom />

      <Routes>
        <Route path="/" element={<NavbarCustom />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/profile" element={<MiPerfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/gallery" element={<Galeria />} />
      </Routes>
    </div>
  );
}

export default App;