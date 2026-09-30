import { useEffect, useState } from "react";

import DishTable from "./dishTable";
import AddDish from "./addDish";
import EditDish from "./editDish";
import DeleteConfirmation from "./deleteConformation";

function DishManagement() {

  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [editingDish, setEditingDish] = useState(null);
  const [deletingDish, setDeletingDish] = useState(null);


  // Load dishes
  useEffect(() => {

    const savedDishes = localStorage.getItem("addiseats_dishes");

    if (savedDishes) {

      setDishes(JSON.parse(savedDishes));

    } else {

      fetch("/menu.json")
        .then((res) => res.json())
        .then((data) => {

          setDishes(data);

          localStorage.setItem(
            "addiseats_dishes",
            JSON.stringify(data)
          );

        })
        .catch((error) => {
          console.error("Error loading dishes:", error);
        });
    }

  }, []);


  // Save dishes to localStorage
  useEffect(() => {

    if (dishes.length > 0) {

      localStorage.setItem(
        "addiseats_dishes",
        JSON.stringify(dishes)
      );

    }

  }, [dishes]);


  // Enable / Disable
  const toggleAvailability = (id) => {

    setDishes((prev) =>
      prev.map((dish) =>
        dish.id === id
          ? {
              ...dish,
              isAvailable: !dish.isAvailable
            }
          : dish
      )
    );

  };


  // Add dish
  function addDish(newDish) {

    const dishWithId = {
      ...newDish,
      id: Date.now(),
      isAvailable: true
    };

    setDishes((currentDishes) => [
      ...currentDishes,
      dishWithId
    ]);

    setShowAdd(false);
  }


  // Edit dish
  function updateDish(updatedDish) {

    setDishes((currentDishes) =>
      currentDishes.map((dish) =>
        dish.id === updatedDish.id
          ? updatedDish
          : dish
      )
    );

    setEditingDish(null);
  }


  // Delete dish
  function deleteDish(id) {

    setDishes((currentDishes) =>
      currentDishes.filter(
        (dish) => dish.id !== id
      )
    );

    setDeletingDish(null);
  }


  return (
    <section>

      <h1 className="dm">
        Dish Management
      </h1>


      <div className="dsb">

        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          id="ad"
          onClick={() => setShowAdd(true)}
        >
          Add Dish
        </button>

      </div>


      <DishTable
        dishes={dishes}
        search={search}
        onEdit={setEditingDish}
        onDelete={setDeletingDish}
        onToggleAvailability={toggleAvailability}
      />


      {showAdd && (
        <AddDish
          onAdd={addDish}
          onClose={() => setShowAdd(false)}
        />
      )}


      {editingDish && (
        <EditDish
          dish={editingDish}
          onUpdate={updateDish}
          onClose={() =>
            setEditingDish(null)
          }
        />
      )}


      {deletingDish && (
        <DeleteConfirmation
          dish={deletingDish}
          onConfirm={deleteDish}
          onClose={() =>
            setDeletingDish(null)
          }
        />
      )}

    </section>
  );
}

export default DishManagement;