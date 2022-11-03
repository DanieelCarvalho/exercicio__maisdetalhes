import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Detalhes from "../Detalhes";
import Loading from "../../assets/loading.svg"

export default function HomePage() {
  const [recipes, setRecipes] = useState(null);


  useEffect(() => {
    const promise = axios.get("http://localhost:1234/menu");
    promise.then(response => {
      setRecipes(response.data);
    })
  }, []);

  function buildRecipes() {
    if (!recipes) return <img src={Loading} alt="carregando..." />
    return recipes.map(recipe => {
      const url = `/products/${recipe.id}`;
      return (
        <li><Link to={url}>{recipe.item }  </Link></li>
      )
    })
  }


  const recipesComponent = buildRecipes();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {recipesComponent }
       
      </ul>
      
    </div>
  )
} 