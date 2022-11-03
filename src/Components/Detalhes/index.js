import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../assets/loading.svg"


export default function Detalhes() {
  const {id} = useParams()
  const navigate = useNavigate();
    const [recipes, setRecipes] = useState(null);
    function handleBack() {
      navigate("/");
    }
   console.log("id",id)
    useEffect(() => {
        const promise = axios.get("http://localhost:1234/recipes");
        promise.then(response => {
          console.log(response.data)
          const recipe = response.data.filter(el => el.id == id)
          setRecipes(recipe);
          console.log(recipe)
        })
      }, []);
      
      console.log(recipes)
      function comoFazer() {
        if (!recipes) return<img src={Loading} alt="carregando..." />
        return recipes.map(recipes => {
            return (
            <div>
            <h1>{recipes.title}</h1>
            <p>ingredientes: {recipes.ingredients}</p>
            <p> tempo de preparo: {recipes.time} minutos </p>
            <p>Como fazer: {recipes.steps}</p>
            
            </div>
          )
         
      
        
        })
      }
    const recipesComponent = comoFazer()
    return (
      <div >
          {recipesComponent}
          <button onClick={handleBack}> volte</button>
    
      </div>
    )
  }