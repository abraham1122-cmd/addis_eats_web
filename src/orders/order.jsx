
import { useEffect, useState } from "react";
import { getOrders } from "./orderApi";
import OrderCard from "./orderCard";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        setError("Failed to load order history.");
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return <p>Loading order history...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="OH">
      <h4>Order History</h4>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))
      )}
    </div>
  );
}

export default Orders;