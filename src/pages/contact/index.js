import RootLayout from "@/Components/Layouts/RootLayout";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
