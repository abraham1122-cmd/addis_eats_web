

import { useEffect, useState } from "react";

function Analytics() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("addiseats_orders")
    ) || [];

    setOrders(savedOrders);
  }, []);

  const totalRevenue = orders.reduce(
    (total, order) => total + order.total,
    0
  );

  const orderCount = orders.length;

  const averageOrderValue =
    orderCount > 0 ? totalRevenue / orderCount : 0;

  return (
    <div className="analytics">
      <div className="analytics-card">
        <h3>Total Revenue</h3>
        <p>{totalRevenue.toLocaleString()} ETB</p>
      </div>

      <div className="analytics-card">
        <h3>Total Orders</h3>
        <p>{orderCount}</p>
      </div>

      <div className="analytics-card">
        <h3>Average Order</h3>
        <p>{averageOrderValue.toLocaleString()} ETB</p>
      </div>
    </div>
  );
}

export default Analytics;