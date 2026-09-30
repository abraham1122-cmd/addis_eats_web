import { useState } from "react";

function AddDish({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
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

    onAdd(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="and">Add New Dish</h2>

      <input
        name="name"
        placeholder="Dish name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select category</option>
        <option value="Ethiopian">Ethiopian</option>
        <option value="Pizza">Pizza</option>
        <option value="Burgers">Burgers</option>
        <option value="Drinks">Drinks</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Dish</button>

      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

export default AddDish;