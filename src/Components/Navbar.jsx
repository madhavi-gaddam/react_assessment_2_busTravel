import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../Context/BookingContextObject";

function Navbar() {
  const { count } = useContext(BookingContext);

  return (
    <nav className="navbar">
      <h2>BusTravel Hub</h2>

      <div>
        <Link to="/">Back To Search</Link>
        <span className="bookings">
          Booked Tickets : {count}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
