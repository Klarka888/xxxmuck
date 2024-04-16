import React from "react";
import { useState } from "react";

export const Product = () => {
    const [link, setLink] = useState(image);
    const fetchName = async () => {
        const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
        const data = await response.json();
        setLink(data.image);
      };
      fetchName();
      
return(
    <>
    {data.map((p) => (
        <h2>{p.name}</h2>
    ))}
    <p>{link}</p>
      </>
)
}