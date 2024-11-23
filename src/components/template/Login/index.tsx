import { postLogin } from "@/api/authentication";
import React, { useState } from "react";
import { setCookie } from "cookies-next/client";
import { COOKIE_USER_ID, COOKIE_USER_NAME } from "@/constants";
import { useRouter } from "next/navigation";

interface IProps {}

const LoginComponent = (props: IProps) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Handle login logic here
      console.log("Username:", username);
      console.log("Password:", password);
      const res = await postLogin({ username, password });
      const { data } = res;
      if (data.user) {
        setCookie(COOKIE_USER_ID, data.user.id);
        setCookie(COOKIE_USER_NAME, data.user.username);
        router.push("/");
      }
    } catch (err) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Login
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
