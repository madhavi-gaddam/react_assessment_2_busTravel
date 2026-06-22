import { useState, useContext } from "react";
import BusCard from "../Components/BusCard";
import { BookingContext } from "../Context/BookingContextObject";

function SearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { buses } = useContext(BookingContext);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const matchesPlace = (place, searchText) =>
    place.toLowerCase().includes(searchText.trim().toLowerCase());

  const places = [
    ...new Set(
      buses.flatMap((bus) => [bus.from, bus.to])
    ),
  ];

  const filteredBuses = buses.filter((bus) => {
    const fromMatches = from === "" || matchesPlace(bus.from, from);
    const toMatches = to === "" || matchesPlace(bus.to, to);

    return fromMatches && toMatches;
  });

  const hasSearched = from.trim() !== "" || to.trim() !== "";

  return (
    <div className="search-container">
      <div className="search-bars">
        <input
          type="search"
          list="places"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <button type="button" onClick={handleSwap} className="swap-icon">
         ⇄
        </button>

        <input
          type="search"
          list="places"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <datalist id="places">
          {places.map((place) => (
            <option key={place} value={place} />
          ))}
        </datalist>
      </div>

      {hasSearched && (
        <div className="bus-list">
          {filteredBuses.map((bus) => (
            <BusCard key={bus.id} bus={bus} />
          ))}

          {filteredBuses.length === 0 && (
            <p className="no-results">No buses found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
