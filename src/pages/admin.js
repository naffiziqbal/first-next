import Dashboard from "@/Components/Layouts/Dashboard";

const Admin = () => {
  return <div>This Is Admin page</div>;
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
