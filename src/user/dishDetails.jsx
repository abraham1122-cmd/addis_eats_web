



import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";



function DishDetails(){

     const {id} = useParams();

     const {data, loading, error} = useFetch("/menu.json");

     if(loading) return(

       <p>Loading...</p>
     )                
     
     
     
    
     if(error) return <p>Error: {error}</p>

     const dish = data.find((dish)=>String(dish.id)=== String(id));
    
     if(!dish){
        return <p>Sorry! Dish can't found</p>
     }

     return(
        <div>

         <img src={dish.image} alt={dish.name} />
         <h3>Name: {dish.name}</h3>
         <h5>Id: {id}</h5>
         <p>Price: {dish.price} ETB</p>
         <p>Category: {dish.category}</p>
         <p>Description: {dish.description}</p>
         <p>Ingridients: {dish.ingridients}</p>
         

         

            

        </div>
     )
   
}


export default DishDetails;