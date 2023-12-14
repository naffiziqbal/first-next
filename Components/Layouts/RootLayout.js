import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <div>
      <h1 style={{ textAlign: " Center" }}> Fixed Header</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div
        style={{
          margin: "1rem 0",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
