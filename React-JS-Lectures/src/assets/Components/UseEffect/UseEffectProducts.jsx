import { useEffect, useState } from "react";

export default function UseEffectProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())

      // Api Uzerinden Gelen Cevabi Console Ekraninda Kontrol Ediyoruz 
      // .then(console.log)
      .then((data) => {
        setProducts(data.products);
      })
  }, [])

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.thumbnail}</p>
        </div>
      ))}
    </>
  )
}