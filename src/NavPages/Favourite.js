import React from "react";

function Favourites({ favlist }) {
    return (
        <div>
            <h1>Favorites</h1>
            {favlist.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <ul>
                    {favlist.map((recipe, index) => (
                        <li key={index}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image_url} alt={recipe.title} style={{ width: '100px' }} />
                            <p>Publisher: {recipe.publisher}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favourites;
