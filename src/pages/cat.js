import React from "react";
import useGetCat from "../useGetCat";

const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCat()
  return (
    <div>
       <h1>{data?.fact}</h1> 
     </div>
   )
}

export default Cat; 