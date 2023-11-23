import React from "react";
import { useQuery } from 'react-query';
import Axios from "axios";

const Home = () => {
  const { data }  = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
   <div>
      <h1> This is the home page 
        <p> {data?.fact} </p>
      </h1> 
    </div>
  )
};

export default Home; 
