import React from "react";
// import { getPost } from "./PrAPI";
// import { getPostId } from "./PrAPI";
// import { updtePost } from "./PrAPI";
import { deletePost } from "./PrAPI";
import { useEffect } from "react";

export const ApiApplicaton = () => {
  useEffect(() => {
    const deleteSinglePost = async () => {
      try {
        const res = await deletePost(3); // Direct ID yahan bhi de sakte hain
        console.log("Success:", res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    deleteSinglePost();
  }, []);
  // useEffect(() => {
  //   const updateSinglePost = async () => {
  //     const updatedData = { name: "AKMAL", title: "AQSA AKMAL" };
  //     try {
  //       const res = await updtePost(3, updatedData); // Direct ID yahan bhi de sakte hain
  //       console.log("Success:", res);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   updateSinglePost();
  // }, []);
  // useEffect(() => {
  //   const fetchSinglePost = async () => {
  //     try {
  //       const res = await getPostId(3); // Direct ID yahan bhi de sakte hain
  //       console.log("Success:", res);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchSinglePost();
  // }, []);
  //   const fetchAllData = async () => {
  //     try {
  //       const res = await getPost(); // await lagana lazmi hai
  //       console.log("Response Data:", res); // Axios ka data 'res.data' mein hota hai
  //     } catch (error) {
  //       console.error("Fetching error:", error);
  //     }
  //   };

  //   fetchAllData(); // Function ko call karein
  // }, []);
  return <div>Data...</div>;
};
