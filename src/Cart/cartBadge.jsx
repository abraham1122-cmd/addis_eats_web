


import useCartStore from "./cartStore";

function CartBadge() {
  const itemCount = useCartStore(
    (state) =>
      state.items.reduce(
        (total, item) => total + item.count,
        0
      )
  );

  return (
    <span className="cart-badge">
      {itemCount}
    </span>
  );
}

export default CartBadge;