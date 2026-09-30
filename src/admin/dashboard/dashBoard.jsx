

import Analytics from "./analytics";
import TopSellingDishes from "./topSellingDish";
import OrderStatusChart from "./orderStatusChart";

function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <Analytics />

      <div className="dashboard-sections">
        <TopSellingDishes />
        <OrderStatusChart />
      </div>
    </section>
  );
}

export default Dashboard;