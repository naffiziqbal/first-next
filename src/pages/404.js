import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: " red" }}>!404 Error</h1>
      <h3 style={{ color: "green" }}>
        You&apos;ll be soon redirect To Homepage
      </h3>
    </div>
  );
};

export default Error;
