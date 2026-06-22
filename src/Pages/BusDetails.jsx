import { useParams } from "react-router-dom";
import { useContext ,useState} from "react";

import { BookingContext } from "../Context/BookingContextObject";

function BusDetails() {
  const { id } = useParams();

  const { buses,bookTicket } =useContext(BookingContext);

  const bus = buses.find(
    (item) => item.id === Number(id)
  );
  const[qty,setQty]=useState(1);
  const isMinusDisabled = qty === 1;
  const isPlusDisabled = qty === bus.availableSeats;

  const handleBooking = () => {
    if (bus.availableSeats === 0) {
      alert("No tickets available");
      return;
    }

    bookTicket(bus.id, qty);
    alert("Ticket Booked Successfully!");
   
  };

  return (
    <div className="details">
      <h2>{bus.operator}</h2>

      <p>From : {bus.from}</p>

      <p>To : {bus.to}</p>

      <p>Price : {bus.price}</p>

      <p>Departure : {bus.departure}</p>

      <p>Arrival : {bus.arrival}</p>
      <p>Available Seats:{bus.availableSeats}</p>

      {bus.availableSeats > 0 ? (
        <div className="booking-actions">
          <div className="quantity">
            <button
              disabled={isMinusDisabled}
              onClick={() => setQty(qty - 1)}
            >
              -
            </button>
            <span>{qty}</span>
            <button
              disabled={isPlusDisabled}
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          <button onClick={handleBooking}>
            Book {qty} {qty === 1 ? "Ticket" : "Tickets"}
          </button>
        </div>
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
}

export default BusDetails;
