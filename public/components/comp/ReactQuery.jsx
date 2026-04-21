// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchData } from "../../API/API";
// import { addUser } from "../../API/API";
// import { getSingleUser } from "../../API/API";
// import { useState } from "react";
// import { updateUser } from "../../API/API";
// import { deleteUser } from "../../API/API";

// function ReactQuery() {
//   const [id, setId] = useState(2);
//   const [ud, setUd] = useState([]);

//   // const { data } = useQuery({
//   //   queryKey: ["user"],
//   //   queryFn: fetchData,
//   // });
//   // console.log(data);

//   // const handleAddUser = async () => {
//   //   const newUser = {
//   //     title: "New Post Title2",
//   //     body: "This is the content 2of the post",
//   //     userId: 2,
//   //   };
//   //   try {
//   //     console.log("Sending Data....");
//   //     const res = await addUser(newUser);
//   //     console.log("Respone from server", res);
//   //   } catch (error) {
//   //     console.log("Post Faild", error);
//   //   }
//   // };
//   // const handleGetUser = async (targetid) => {
//   //   const res = await getSingleUser(targetid);
//   //   console.log("DATA..", res);
//   // };
//   // const handleUpdateData = async (userid) => {
//   //   const dataToupdate = { name: "My Name", username: "AQSA AKMAL" };
//   //   const res = await updateUser(userid, dataToupdate);
//   //   console.log("Response...", res);
//   // };
//   const handleDeleteUser = async (id) => {
//     const res = await deleteUser(id);
//     console.log("Response...", res);
//   };
//   return (
//     <>
//       {/* <div>
//         {data?.map((user) => (
//           <p key={user.id}>{user.name}</p>
//         ))}
//       </div> */}
//       <h1>Data Operations</h1>
//       {/* Button click par post request jayegi */}
//       {/* <button onClick={handleAddUser}>Add New Post</button> */}
//       <input
//         type="text"
//         placeholder="Enter Id"
//         onChange={(e) => setId(e.target.value)}
//       />
//       <button onClick={() => handleDeleteUser(id)}>Add New Post</button>
//       {/* <button onClick={() => handleUpdateData(id)}>Add New Post</button> */}
//       {/* <button onClick={() => handleGetUser(id)}>Add New Post</button> */}
//     </>
//   );
// }

// export default ReactQuery;
