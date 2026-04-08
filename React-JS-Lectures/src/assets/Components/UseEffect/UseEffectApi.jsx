import { useEffect, useState } from "react";

export default function UseEffectApi() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())

      // Api Uzerinden Gelen Cevabi Console Ekraninda Kontrol Ediyoruz 
      // .then(console.log)
      .then((data) => {
        setRecipes(data.recipes);
      })
  }, [])

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.name}</h4>
          <p>Tarif: {recipe.ingredients}</p>
          <p>{recipe.cuisine}</p>
        </div>
      ))}
    </>
  )
}