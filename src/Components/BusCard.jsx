import { Link } from "react-router-dom";

function BusCard({ bus }) {
  return (
    <div className="card">
      <h3>{bus.operator}</h3>

      <p>
        {bus.from} ➜ {bus.to}
      </p>

      <p>{bus.departure}</p>

      <p>Price:{bus.price}</p>
      <p>Available Seats:{bus.availableSeats}</p>

      <Link to={`/bus/${bus.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default BusCard;