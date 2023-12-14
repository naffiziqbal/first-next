const Dashboard = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "33%",
          alignItems: "center",
          justifyContent: "center",
          borderRight : "2px solid white"
        }}
      >
        Side Nav
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
