import { useState } from "react";

export default function MapMethodAndKey() {

  const fruits = ["elma", "armut", "çilek", "karpuz", "kavun"];
  const fruits2 = [
    {
      id: 1, name: "Ejder Meyvesi"
    },
    {
      id: 2, name: "Tropikal Meyve"
    },
    {
      id: 3, name: "Üzüm"
    }
  ];

  const [recipes, setRecipes] = useState([]);

  return (
    <>
      {/* Array Icindeki Data'lari Yazdirirken 
        Key Hatasi Almamak Icin 
        Array Icindeki Data'lari Yazdirirken 
        Index Degerini Kullaniyoruz  */}
      <ul>
        {
          fruits.map((fruit, i) => (
            <li key={i}>{fruit}</li>
          ))
        }
      </ul>
      <ul>
        {
          fruits2.map((fruits2) => (
            <li key={fruits2.id}>{fruits2.name}</li>
          ))
        }
      </ul>

    </>
  )
}