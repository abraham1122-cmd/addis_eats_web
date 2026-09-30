function DishTable({
  dishes,
  search,
  onEdit,
  onDelete,
  onToggleAvailability
}) {
  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {filteredDishes.length === 0 ? (
          <tr>
            <td colSpan="4">No dishes found.</td>
          </tr>
        ) : (
          filteredDishes.map((dish) => (
            <tr key={dish.id}>
              
              <td className={dish.isAvailable ? "" : "disabled-dish"}>
                {dish.name}
                </td>

              <td>{dish.category}</td>
              <td>{dish.price} ETB</td>

              <td>

               <button
                  onClick={() => onToggleAvailability(dish.id)}
                >
                  {dish.isAvailable ? "Disable" : "Enable"}
                </button>


                <button
                  id="edit"
                  onClick={() => onEdit(dish)}
                >
                  Edit
                </button>

                <button
                  id="delete"
                  onClick={() => onDelete(dish)}
                >
                  Delete
                </button>

                
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default DishTable;