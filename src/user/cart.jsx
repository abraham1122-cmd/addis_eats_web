

import useCartStore from "../Cart/cartStore";


function Cart() {
  const items = useCartStore((state)=>state.items);
  const increase = useCartStore((state)=> state.increase);
  const decrease = useCartStore((state)=> state.decrease);
  const remove = useCartStore((state)=>state.remove)


     const total = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <section id="cart-card">
      <h2>My Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <h3>{item.name}</h3>

              <p>
                Price: {item.price} ETB
              </p>

              <button
                type="button"
                onClick={() => decrease(item.id)}
                
              >
                -
              </button>

              <span>{item.count}</span>

              <button
                type="button"
                onClick={() => increase(item.id)
                 
                }
              >
                +
              </button>

              <p>
                Subtotal:{" "}
                {item.price * item.count} ETB
              </p>

              <button
                type="button"
                onClick={() => remove(item.id)
                  
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: {total} ETB</h2>
        </>
      )}
    </section>
  );
}

export default Cart;