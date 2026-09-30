

function DeleteConfirmation({ dish, onConfirm, onClose }) {
  return (
    <div>
      <h2>Delete Dish</h2>

      <p>
        Are you sure you want to delete{" "}
        <strong>{dish.name}</strong>?
      </p>

      <button onClick={onClose}>
        Cancel
      </button>

      <button onClick={() => onConfirm(dish.id)}>
        Delete
      </button>
    </div>
  );
}

export default DeleteConfirmation;