

function OrderDetails({ order, onClose, children }) {
  return (
    <div className="order-details">
      <h2>Order Details</h2>

      <p>
        <strong>Order ID:</strong> {order.id}
      </p>

      <p>
        <strong>Customer:</strong>{" "}
        {order.customer?.name || "Unknown"}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {order.customer?.phone || "N/A"}
      </p>

      <p>
        <strong>Delivery Area:</strong>{" "}
        {order.customer?.area || "N/A"}
      </p>

      <h3>Items</h3>

      {order.items?.length > 0 ? (
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.count} —{" "}
              {(item.price * item.count).toLocaleString()} ETB
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}

      <h3>
        Total: {order.total?.toLocaleString() || 0} ETB
      </h3>

      {children}

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default OrderDetails;