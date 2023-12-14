import RootLayout from "@/Components/Layouts/RootLayout";

const Home = () => {
  return (
    <div>
      <h1>This Is My First Next App</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
