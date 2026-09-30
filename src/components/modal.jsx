




import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

function DishModal({ dish, onClose, triggerRef }) {
  const closeButtonRef = useRef(null);

  
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

 
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

 
  useEffect(() => {
    return () => {
      triggerRef.current?.focus();
    };
  }, [triggerRef]);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="dish-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
        >
            Close
        </button>

        <h2 id="dish-modal-title">{dish.name}</h2>

        <p>Price: {dish.price} ETB</p>
        <p>Category: {dish.category}</p>

        <img src={dish.image} alt={dish.name} />

        <p>{dish.description}</p>
      </div>
    </div>,
    document.body
  );
}

export default DishModal;