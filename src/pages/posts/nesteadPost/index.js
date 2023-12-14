import RootLayout from "@/Components/Layouts/RootLayout";

const NeastedPost = () => {
  return (
    <div>
      <h1>This is neasted post page</h1>
    </div>
  );
};

export default NeastedPost;

NeastedPost.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
