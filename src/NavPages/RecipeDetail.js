import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function RecipeDetail({favlist,setFavList}) {
    const { id } = useParams();
    const [resDetail, setResDetail] = useState(null);
    const [fav,setFav] = useState(false);
    

    const FoodDetail = async () => {
       
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            
            const data = await response.json();
            setResDetail(data.data.recipe);
        
    };

    useEffect(() => {
        FoodDetail();
    }, [id]);

    

    const handleFav=()=>
    {
        if(fav){
            setFavList(favlist.filter(item=>item.id!==resDetail.id))
        }
        else{
            setFavList([...favlist],resDetail)

        }

        
        setFav(!fav);
    }

    

    return (
        <div>
            {resDetail ? (
                <>
                   <div className="d-flex"> 
                    <div><h1>{resDetail.title}</h1>
                    <img src={resDetail.image_url} alt={resDetail.title} />
                    <p>Publisher: {resDetail.publisher}</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {resDetail.ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing.quantity} {ing.unit} {ing.description}
                            </li>
                        ))}
                    </ul> </div> 
                    <div><button   className="btn "style={{ backgroundColor: 'black', color: 'white',marginTop:'150px', marginLeft:'100px' }} onClick={handleFav}>
                        {fav? "Remove from Favourites": "Add to Favorites"}</button></div> </div> 
                    
                </>
            ) : (
                <p>Loading...</p>
            )}
            <NavLink to={'/Favourites'} >Go to Fav</NavLink>
        </div>
    );
}

export default RecipeDetail;
