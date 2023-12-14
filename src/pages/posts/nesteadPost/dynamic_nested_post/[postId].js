import { useRouter } from "next/router";
import RootLayout from "../../../../../Components/Layouts/RootLayout";

const PostDetails = () => {
  const route = useRouter();
  return (
    <div>
      <h1>This is Dynamic Nestead Post id:{route.query.postId} </h1>
    </div>
  );
};




export default PostDetails;
