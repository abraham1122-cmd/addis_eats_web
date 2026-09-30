

import useFavoritesStore from "../favorites/favoritesStore";
import EmptyState from "../components/emptyState";

function Favorites() {
  const favorites = useFavoritesStore(
    (state) => state.favorites
  );

  const removeFavorite = useFavoritesStore(
    (state) => state.removeFavorite
  );

  return (
    <section>
      {/* <h1>My Favorites</h1> */}

      {favorites.length === 0 ? (
        <EmptyState
          // title="No Favorites Yet"
          message="You haven't added any dishes to your favorites yet!"
        />
      ) : (
        <div className="favorites-grid">
          {favorites.map((dish) => (
            <div key={dish.id}>
              <img src={dish.image} alt={dish.name} />

              <h2>{dish.name}</h2>

              <p>{dish.price} ETB</p>

              <button
                onClick={() => removeFavorite(dish.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;