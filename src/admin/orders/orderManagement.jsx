
import { useEffect, useState } from "react";

import OrderTable from "./orderTable";
import OrderDetails from "./orderDetails";
import OrderStatusControl from "./orderStatusControl";

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("addiseats_orders")) || [];

    setOrders(savedOrders);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "addiseats_orders",
      JSON.stringify(orders)
    );
  }, [orders, loaded]);

  function deleteOrder(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    setOrders((currentOrders) =>
      currentOrders.filter((order) => order.id !== id)
    );

    if (selectedOrder?.id === id) {
      setSelectedOrder(null);
    }
  }

  function updateOrderStatus(id, newStatus) {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );

    setSelectedOrder((currentOrder) =>
      currentOrder && currentOrder.id === id
        ? { ...currentOrder, status: newStatus }
        : currentOrder
    );
  }

  return (
    <section className="orm" >
     
      <h1>Order Management</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <OrderTable
          orders={orders}
          onView={setSelectedOrder}
          onDelete={deleteOrder}
        />
      )}

      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        >
          <OrderStatusControl
            order={selectedOrder}
            onStatusChange={updateOrderStatus}
          />
        </OrderDetails>
      )}
    </section>
  );
}

export default OrderManagement;