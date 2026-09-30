

function OrderStatusControl({ order, onStatusChange }) {
  function handleChange(e) {
    onStatusChange(order.id, e.target.value);
  }

  return (
    <div className="order-status-control">
      <label htmlFor="order-status">
        Order Status:
      </label>

      <select
        id="order-status"
        value={order.status || "pending"}
        onChange={handleChange}
      >
        <option value="pending">
          Pending
        </option>

        <option value="preparing">
          Preparing
        </option>

        <option value="delivering">
          Delivering
        </option>

        <option value="delivered">
          Delivered
        </option>
      </select>
    </div>
  );
}

export default OrderStatusControl;