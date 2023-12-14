import RootLayout from "@/Components/Layouts/RootLayout";


const About = () => {
  return (
    <div>
      <p>This Is about Page</p>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
