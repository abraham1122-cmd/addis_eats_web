

import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../Cart/cartStore";

function OrderCard({ order }) {
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();

  function handleReorder(order) {
    order.items.forEach((item) => {
      addItem(item);
    });

    navigate("/cart");
  }



  return (
    <div className="order-card">
      <h2>Order #{order.id}</h2>

      <p>Date: {order.date}</p>

      {/* <p>Items: {order.items.length}</p> */}

      <p>Total: {order.total} ETB</p>

      <p>Status: {order.status}</p>

      <Link to={`/orders/${order.id}`}>
        View Details
      </Link>

      <button className="ro" onClick={()=> handleReorder(order)}
      >Reorder</button>
    </div>
  );
}

export default OrderCard;