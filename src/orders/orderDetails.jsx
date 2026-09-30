

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "./orderApi";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOrder() {
      try {
        const data = await getOrder(id);
        setOrder(data);
      } catch (err) {
        setError("Failed to load order details.");
      } finally {
        setLoading(false);
      }
    }

    loadOrder();
  }, [id]);

  if (loading) {
    return <p>Loading order...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <main className="order-details">
      <h1>Order #{order.id}</h1>

      <p>Date: {order.date}</p>

      <h2>Customer Information</h2>

      <p>Name: {order.customer.name}</p>

      <p>Phone: {order.customer.phone}</p>

      <p>Delivery Area: {order.customer.area}</p>
      <p>DeliveryFee: {order.deliveryFee} ETB</p>
      <p>DeliveryTime: {order.deliveryTime} ETB</p>

      {order.notes && (
        <p>Notes: {order.notes}</p>
      )}

      <h2>Ordered Items</h2>

      {order.items.map((item) => (
        <div key={item.id}>

          
          <p>
            {item.name} × {item.count}
          </p>

          <p>
            {item.price * item.count} ETB
          </p>
        </div>
      ))}

      <h2>Order Summary</h2>

      <p>Payment: {order.payment}</p>

      <p>Status: {order.status}</p>

      <p>subtotal: {order.subtotal}  ETB</p>

      <h3>Total: {order.total} ETB</h3>
    </main>
  );
}

export default OrderDetails;