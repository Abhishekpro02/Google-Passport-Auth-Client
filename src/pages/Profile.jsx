import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const { authUser, loading } = useAuthContext();
  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      {/* <h1
        className="text-4xl font-bold text-center text-white mb-4"
        style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
      >
        Profile Page
      </h1> */}
      <h1
        className="text-4xl font-bold text-center text-white mb-4 relative"
        style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
      >
        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Profile Page
        </span>
      </h1>
      <p
        className="mt-4 text-gray-500
        text-center w-96 sm:w-auto lg:w-1/2 xl:w-1/3  text-lg font-semibold
      "
      >
        This is a authenticated user profile page.
      </p>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <img
            src={authUser?.photo}
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <h1 className="text-xl font-bold text-white">{authUser?.name}</h1>
          <h2 className="text-gray-500">{authUser?.username}</h2>
          <h3 className="text-red-500">
            My Google ID 🔐 : {authUser?.googleId}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Profile;
