
import { useState } from "react";

function EditDish({ dish, onClose }) {
  const [formData, setFormData] = useState({
    name: dish.name,
    price: dish.price,
    category: dish.category,
    description: dish.description,
    image: dish.image,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      id: dish.id,
      ...formData,
    });

    

    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Dish</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="Ethiopian">Habesha Food</option>
        <option value="Pizza">Pizza</option>
        <option value="Burgers">Burger</option>
        <option value="Drinks">Vegiterian</option>
      </select>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Save Changes</button>

      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

export default EditDish;