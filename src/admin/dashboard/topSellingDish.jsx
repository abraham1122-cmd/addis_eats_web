

import { useEffect, useState } from "react";

function TopSellingDishes() {
  const [topDishes, setTopDishes] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(
      localStorage.getItem("addiseats_orders")
    ) || [];

    const dishCounts = {};

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (dishCounts[item.name]) {
          dishCounts[item.name] += item.count;
        } else {
          dishCounts[item.name] = item.count;
        }
      });
    });

    const result = Object.entries(dishCounts)
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    setTopDishes(result);
  }, []);

  return (
    <section className="top-selling">
      <h2>Top Selling Dishes</h2>

      {topDishes.length === 0 ? (
        <p>No sales yet.</p>
      ) : (
        <ol>
          {topDishes.map((dish) => (
            <li key={dish.name}>
              {dish.name} — {dish.count} sold
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default TopSellingDishes;