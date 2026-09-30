


import {Link} from "react-router-dom";

import useCartStore from "./cartStore";


function CartDrawer({ isOpen, onClose }) {
const items = useCartStore((state)=> state.items);
const increase = useCartStore((state)=>state.increase);
const decrease = useCartStore((state)=> state.decrease);
const remove = useCartStore((state)=>state.remove);
const clear = useCartStore((state)=> state.clear) 

const total = items.reduce(  
  (sum, item) => sum + item.price * item.count,
  0
);

  if (!isOpen) {
    return null;
  }

  
  return (
    <>
      <div
        className="cart-overlay"
        onClick={onClose}
      />

      <aside className="cart-drawer">

        <div className="cart-drawer-header">
          <h2>My Cart</h2>

          <button
            type="button"
            onClick={onClose}
            className="close-cart"
          >
            ×
          </button>
        </div>

        <div className="cart-drawer-body">

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                className="cart-drawer-item"
                key={item.id}
              >
                <h3>{item.name}</h3>

                <p>
                  {item.price} ETB
                </p>

                <button
                  type="button"
                  onClick={() => decrease(item.id)}
                    
                     
                  
                >
                  -
                </button>

                <span>
                  {item.count}
                </span>

                <button
                  type="button"
                  onClick={() => increase(item.id)}
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() =>remove(item.id)
                    
                  }
                >
                  Remove
                </button>
              
              </div>
            ))
          )}

        </div>

        <div className="cart-drawer-footer">

          <strong>
            Total: {total} ETB
          </strong>


         <div >
  <button className="cart-clear"
                type="button"
                onClick={clear}
                >
                    Clear Cart

                </button>
                </div>


         <Link to="/checkout" onClick={onClose}>
            Checkout
            </Link>

        </div>

      </aside>
    </>
  );
}

export default CartDrawer;