
import { Link } from "react-router-dom";


function CategoryBar() {
  const categories = [
    "All",
    "Habesha Food",
    "Pizza",
    "Burger",
    "Vegetarian"
  ];

  return (
    <div className="category-bar">
      {categories.map((category) => (

      
        <Link
        
          className="category-b"
          key={category}
          to={
            
            category === "All"
              ? "/menu"
              : `/menu?category=${category}`
              
          }
        >
          {category}
        
        </Link>



      ))}
    </div>
  );
}

export default CategoryBar;