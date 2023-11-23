import React from "react";
import { useQuery } from 'react-query';
import Axios from "axios";

const Home = () => {
  const { 
    data: catData, 
    isLoading, isError, 
    refetch }  = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1> Sorry, there was an error!</h1>
  }

  if (isLoading) {
    return <h1> Loading... </h1>
  }

  return (
   <div>
      <h1> 
        <p> {catData?.fact} </p>
        <button onClick={refetch}> Update Data </button>
      </h1> 
    </div>
  )
};

export default Home; 
