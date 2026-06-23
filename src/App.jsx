import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearchPage from "./Pages/SearchPage";
import BusDetails from "./Pages/BusDetails";
import NotFound from "./Pages/NotFound";
import BookingProvider from "./Context/BookingContext";

import "./App.css";

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<SearchPage />}
          />

          <Route
            path="/bus/:id"
            element={<BusDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        

      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
