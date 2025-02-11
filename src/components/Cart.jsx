import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css';

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input 
        type="checkbox" 
        id={cartCheckboxId}
        hidden
      />

      <aside className="cart">
        <ul>
          <li>
            <img src='' alt="" />
            <div>
              <strong>Iphone</strong>
            </div>
            <footer>
              <small>Quantity: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button><ClearCartIcon /></button>
      </aside>
    </>
  );
}
