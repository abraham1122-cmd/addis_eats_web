

function OrderTable({ orders, onView, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Phone</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>

            <td>
              {order.customer?.name || "Unknown"}
            </td>

            <td>
              {order.customer?.phone || "N/A"}
            </td>

            <td>
              {order.total?.toLocaleString() || 0} ETB
            </td>

            <td>
              {order.status || "pending"}
            </td>

            <td>
              <button onClick={() => onView(order)}>
                View
              </button>

              <button onClick={() => onDelete(order.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;