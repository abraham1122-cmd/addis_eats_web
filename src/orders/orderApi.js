

const ORDERS_KEY = "addiseats_orders";

export async function placeOrder(order) {
  const orders = JSON.parse(
    localStorage.getItem(ORDERS_KEY) || "[]"
  );

  const newOrder = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    status: "Pending",
    ...order,
  };

  orders.push(newOrder);

  localStorage.setItem(
    ORDERS_KEY,
    JSON.stringify(orders)
  );

  return {
    ...newOrder,
    message: "Order placed successfully.",
  };
}

export async function getOrders() {
  const orders = JSON.parse(
    localStorage.getItem(ORDERS_KEY) || "[]"
  );

  return orders;
}

export async function getOrder(id) {
  const orders = JSON.parse(
    localStorage.getItem(ORDERS_KEY) || "[]"
  );

  const order = orders.find(
    (order) => order.id === id
  );

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
}