"use client"
import React, { useState } from "react";
// import axios from "axios";


type Props = {};

export default function Suggestions({}: Props) {
  // const [ data, setData ] = useState<any[]>([]); 
  // React.useEffect(() => {
  //   axios.get("https://grade-ai-ed153ea53b42.herokuapp.com/")
  //   .then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  
  // }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      <div className=" bg-darkpaco w-full md:flex justify-center items-center px-36 py-16  hidden rounded-sm">Edit Rubric</div>
      <div className=" bg-darkpaco w-full md:flex justify-center items-center px-36 py-16  hidden rounded-sm">Something</div>
    </div>
  );
}
