



import { useSearchParams } from "react-router-dom";

import { useMemo } from "react";

import { useFetch } from "../hooks/useFetch";
// import useCartStore from "../Cart/CartStore";
import useCartStore from "../Cart/cartStore";

import Dishes from "../dish/dish";
import Card from "../dish/dishCard";
import CategoryBar from "../dish/categoryBar";
import { MenuCardSkeleton } from "../skeleton";



function Menu({  search }) {
  const { data, loading, error } = useFetch("/menu.json");

  const items = useCartStore((state)=>state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decrease = useCartStore((state)=> state.decrease);
  const increase = useCartStore((state)=> state.increase)

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";

  function HandleCategory(category){
    
    if(category === 'All'){
      setSearchParams({});
    }else{
      setSearchParams({category});
    }
    
  }


  const filteredDishes = useMemo(() => {
    return data.filter((dish) => {
      const matchesCategory =
        category === "All" ||
        dish.category === category;

      const matchesSearch =
        dish.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [data, category, search]);

  function addToCart(dish) {
    addItem(dish);
  }

  function increaseQuantity(id) {
   increase(id);
  }

  function decreaseQuantity(id) {
    decrease(id);
  }

  if (loading) {
    return(
      <div className="menu">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item)=>(
          <MenuCardSkeleton key={item} />
        ))}


      </div>
    )
    
    
    
    // <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
   
  return (
        
     <>

      <CategoryBar 
         onSelect={HandleCategory}
         activeCategory={category}
         />
  
    
    
    <div className="menu">

        

      {filteredDishes.length === 0 ? (
        <p>Sorry! Dish doesn't exist</p>
      ) : (
        filteredDishes.map((dish) => (
          <Card key={dish.id}>
            <Dishes
              {...dish}
              cart={items}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
             
           
            />
          </Card>
        ))
      )}
    </div>
    </>
  );
}

export default Menu;