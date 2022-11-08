import { useAuthContext } from "context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Dashboard() {
  const [userData, setUserData] = useState({});

  const { setAuth } = useAuthContext();

  const router = useRouter();
  const handleGetUserProfile = () => {
    fetch("/api/auth/profile")
      .then(res => res.json())
      .then(setUserData);
  };

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    const json = response.json();

    console.log({ json });

    setAuth({ isAuth: false, username: "" });
    router.push("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={handleGetUserProfile}>Get user profile</button>
      <br />
      <br />
      <button onClick={handleLogout}>Log Out</button>

      {userData.username ? <h4>Welcome {userData.username}!</h4> : null}
    </div>
  );
}
