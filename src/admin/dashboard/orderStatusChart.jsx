

import { useEffect, useState } from "react";

function OrderStatusChart() {
  const [statusCounts, setStatusCounts] = useState({
    pending: 0,
    preparing: 0,
    delivering: 0,
    delivered: 0,
  });

  useEffect(() => {
    const orders = JSON.parse(
      localStorage.getItem("addiseats_orders")
    ) || [];

    const counts = {
      pending: 0,
      preparing: 0,
      delivering: 0,
      delivered: 0,
    };

    orders.forEach((order) => {
      if (counts[order.status] !== undefined) {
        counts[order.status]++;
      }
    });

    setStatusCounts(counts);
  }, []);

  return (
    <section className="order-status">
      <h2>Order Status</h2>

      <div>
        <p>Pending: {statusCounts.pending}</p>
        <p>Preparing: {statusCounts.preparing}</p>
        <p>Delivering: {statusCounts.delivering}</p>
        <p>Delivered: {statusCounts.delivered}</p>
      </div>
    </section>
  );
}

export default OrderStatusChart;