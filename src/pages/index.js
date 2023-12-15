import RootLayout from "@/Components/Layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>First Next Home page</title>

        <meta name="home page" description="This is home page for Next Js" />
      </Head>
      <h1>This Is My First Next App</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        }
        alt="This is a Image of Tree"
        layout="intrinsic"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
