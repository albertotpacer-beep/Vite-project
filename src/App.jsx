
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Page3 from "./pages/Page3";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Favourites from "./pages/Favourites";
import EventDetails from "./pages/EventDetails";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/about" element={<About />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/events" element={<Page3 />} />

        <Route path="/favourites" element = {<Favourites /> } />

        <Route path="/events/:id" element = {<EventDetails />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
