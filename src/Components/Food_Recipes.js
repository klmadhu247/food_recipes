import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";


function Food_Recipes ()
{

    const [searchItem,setSearchItem] = useState('')
    const [foodItems,setFoodItems] = useState([]);

    const fetchRecipes = async()=>
    {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`);
        const data = await response.json();
        
        if(data?.data?.recipes)
        {
            setFoodItems(data?.data?.recipes)
        }
        else{
            setFoodItems([])
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, [searchItem]);

    const handleSubmit =()=>
    {
        fetchRecipes();
    }
    

    

    


    

    const handleSearch =(e)=>
    {
        setSearchItem(e.target.value)
    }







    return(
        <div>
            <div className="d-flex justify-content-around align-items-center mt-4">
            <h3 style={{ opacity: 0.8 }}>FoodRecipes</h3>
           <input type="text" placeholder="Enter Items..." className="form-control sm w-25 " 
           
           style={{ borderRadius: "30px", boxShadow: "0 3px 5px orange" }} onChange={handleSearch} onSubmit={handleSubmit}/>
           <div className="d-flex px-2">
          <NavLink to={'/'} style={{textDecoration:'none', color:"black"}}>  <h5 className="me-3" style={{ opacity: 0.8 }}>Home</h5> </NavLink>
           <NavLink to={'/Favorites'} style={{textDecoration:'none', color:"black"}}> <h5 style={{ opacity: 0.8 }}>Favourites</h5> </NavLink>
            </div>

            </div>

            <div>
          {!searchItem && <p className="h1 text-center text-dark font-weight-bold mt-5">
          Nothing to show, Please search something
        </p>}
        <div className="row mt-5">
           {foodItems.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card">
            <img src={item.image_url} className="block w-full" />
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text" style={{ color: 'blue' }}>{item.publisher}</p>
         <NavLink to={`/RecipeDetail/${item.id}`} className="btn" style={{ backgroundColor: 'black', color: 'white' }}>Recipe Details</NavLink>
             </div>
                </div>
                    </div>
                ))}
            </div>
              
            </div> 



             

        </div>
    )
}
export default Food_Recipes;