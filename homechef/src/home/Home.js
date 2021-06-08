import React, {useState} from "react";
import "./Home.css";
import Axios from "axios";
import {v4 as uuidv4} from 'uuid';
import Recipe from "../ components/Recipe"
import Alert from "../ components/Alert";
import NavBar from "../navbar/NavBar"

export default function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const id = "5af761f5";
    const key = "04f742981f7b84a12e7d803647954d4c";
    
    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

    const getData = async () => { 
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
                setAlert("This food does not exist.");
            } else {
                setAlert("");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
        } else {
            setAlert("Please fill the form."); 
        }

    }

    const onChange = e => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault(); 
        getData();
    }

    return (
        <div className='display'>
            <div className="navbar">
                    <NavBar/>
            </div>
            <div className="App">
                <h1>Home Chef</h1>
                <form className="search-form" onSubmit={onSubmit}>
                    {alert !== "" && <Alert alert={alert}/>}
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
                    {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)} 
                </div>
            </div> 
        </div>
    );
}