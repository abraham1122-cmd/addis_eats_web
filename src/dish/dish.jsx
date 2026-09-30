


import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import useCartStore from "../Cart/cartStore";

// import DishModal from "../components/Modal";
import DishModal from "../components/modal";
import {useRef, useState } from "react";

import useFavoritesStore from "../favorites/favoritesStore";



function Dishes({
  id,
  name,
  price,
 
  image,
  category,

  
  
  spicy = false,
  isAvailable
}) {

  
  const items = useCartStore((state)=> state.items);
  const addItem = useCartStore((state)=> state.addItem);
  const increase = useCartStore((state)=> state.increase);
  const decrease = useCartStore((state)=> state.decrease)

  const [modalOpen, setModalOpen] = useState(false);
  const detailsButtonRef = useRef(null);


  const cartItem = items.find(
    (item) => item.id === id
  );

  const count = cartItem ? cartItem.count : 0;

  // if (name === "Aynet"){
  //   return("aynet is unvailable");


  // }
  
  const favorites = useFavoritesStore((state)=> state.favorites);
  const addFavorite = useFavoritesStore((state)=> state.addFavorite);
  const removeFavorite = useFavoritesStore((state)=> state.removeFavorite);
  const isFavorite = favorites.some((favorite)=> favorite.id === id);

        const dish ={
          id,
          name,
          price,
          image,
          category,
          spicy,
          isAvailable

        }

  return (
    <div className="dish">
      <img
        className="dish-image"
        src={image}
        alt={name}
      />


  <button
      className="favorite-button"
      onClick={() => {
        if (isFavorite) {
          removeFavorite(id);
        } else {
          addFavorite(dish);
        }
      }}
      // aria-label={
      //   isFavorite
      //     ? "Remove from favorites"
      //     : "Add to favorites"
      // }
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>








      <h3>Name: {name}</h3>

     

      {spicy && (
        <span className="spicybg">
          Spicy
        </span>
      )}

      {/* <Link to ={`/Menu/${id}`}>View Details</Link> */}

      <div className="button-group">

      {count === 0 ? (
  <button
    id="atc"
    type="button"
    onClick={() =>
      addItem({
        id,
        name,
        price
      })
    }
    disabled={!isAvailable}
  >
    {isAvailable ? "Add " : "Unavailable"}
  </button>
) : (
  <div className="count">
    <button
      type="button"
      onClick={() =>
        decrease(id)
      }
    >
      -
    </button>

    <span>{count}</span>

    <button
      type="button"
      onClick={() =>
        increase(id)
      }
    >
      +
    </button>
  </div>
)}

 
      <button id="hv"
        ref={detailsButtonRef}
        type="button"
        onClick={() => setModalOpen(true)}
      >
         View
      </button>
  </div>
     
      {modalOpen && (
        <DishModal
          dish={{
            id,
            name,
            price,
            category,
            image,
          }}
          onClose={() => setModalOpen(false)}
          triggerRef={detailsButtonRef}
        />
      )}



    </div>
  );
}

Dishes.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  image: PropTypes.string,
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  spicy: PropTypes.bool,
};


export default Dishes;