import React from "react";
import { useState } from "react";
import { updtePost } from "./PrAPI";
import { deletePost } from "./PrAPI";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const PatchDeleteUpdateRQ = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
  });
  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updtePost(id, payload),
    onSuccess: (data, variables) => {
      // variables mein wo data hota hai jo humne mutate() ko bheja tha
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log(`Post ID ${variables.id} Updated Successfully!`, data);
      alert("Post Update Ho Gayi!");
    },
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateMutation.mutate({
      id: formData.id,
      payload: {
        title: formData.title,
        body: formData.body,
      },
    });
  };

  return (
    <>
      <div
        style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}
      >
        <h3>Update Post Mutation</h3>
        <form
          onSubmit={handleUpdate}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <input
            name="id"
            placeholder="Enter ID to Update"
            value={formData.id}
            onChange={handleChange}
          />

          <input
            name="title"
            placeholder="New Title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="body"
            placeholder="New Body Content"
            value={formData.body}
            onChange={handleChange}
          />

          <button type="submit" disabled={updateMutation.isPending}>
            {updateMutation.isPending ? "Updating..." : "Update Post"}
          </button>
        </form>
      </div>
    </>
  );
};
export default PatchDeleteUpdateRQ;
// Delete Post By Id
// const PatchDeleteUpdateRQ = () => {
//   const [userId, setUserId] = useState("");
//   const queryClient = useQueryClient();
//   const deleteMuttation = useMutation({
//     mutationFn: (userId) => deletePost(userId),
//     onSuccess: (data, userId) => {
//       queryClient.invalidateQueries(["posts"]);
//       console.log(`Post on userid ${userId} Deleted..`);
//     },
//   });

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="Enter ID (1-100)"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />
//       <button onClick={() => deleteMuttation.mutate(userId)}>
//         {deleteMuttation.isPending ? "Deleting..." : "Delete Post"}
//       </button>

//       {/* ))} */}
//       {/* </div> */}
//     </>
//   );
// };
// export default PatchDeleteUpdateRQ;
