import { useState, useId } from "react";
import "./Filters.css";

export function Filters({ setFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price:</label>
        <input
          type="range"
          id="minPriceFilterId"
          min="0"
          max="3000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id="categoryFilterId" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances </option>
          <option value="furniture">Furniture </option>
          <option value="groceries">Groceries </option>
        </select>
      </div>
    </section>
  );
}
