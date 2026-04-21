import React from "react";
import { useState } from "react";
import { getPostId } from "./PrAPI";

import { useQuery } from "@tanstack/react-query";

export const TanStackQuery = () => {
  const [userId, setUserId] = useState("");

  //   const { data } = useQuery({
  //     queryKey: ["posts"],
  //     queryFn: getPost,
  //   });
  const {
    data,
    refetch: fetchById,
    isFetching,
  } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getPostId(userId),
    enabled: false,
  });
  const handlebutton = () => {
    fetchById();
  };

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <h1>{data.body}</h1>
        </div>
      )}
      <input
        type="number"
        placeholder="Enter ID (1-100)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handlebutton}>
        {isFetching ? "Searching...." : "Search"}
      </button>

      {/* ))} */}
      {/* </div> */}
    </>
  );
};
