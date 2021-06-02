import React, {useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const id = "5af761f5";
    const key = "04f742981f7b84a12e7d803647954d4c";
    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

    const getData = async () => { 
        const result = await Axios.get(url);
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
    }

    const onChange = e => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault(); 
        getData();
    }

    return (
        <div className="App">
            <h1>Home Chef</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="What do you feel like making today?" 
                autoComplete="off" 
                onChange={onChange} 
                value={query} 
                />
                <input type="submit" value="Search" />
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe => <h2>{recipe.recipe.label}</h2>)} 
            </div>
        </div> 
    );
}
export default App;