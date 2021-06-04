import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

export default function Recipe({recipe}) {
    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <br/>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Visit the website!
            </a>
            <br/>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

