import { useRouter } from "next/router";
import React from "react";

const PostDetails = () => {
  const route = useRouter();
  return (
    <div>
      <h1>This is Dynamic Nestead Post id:{route.query.postId} </h1>
    </div>
  );
};

export default PostDetails;
