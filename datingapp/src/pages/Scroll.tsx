import React, { useState, useEffect } from "react";
import type { JSX } from "react/jsx-runtime";
import { type UserData } from "../types/User";
import SecondNavbar from "../components/secondNavbar";

const Scroll = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [likedUsers, setLikedUsers] = useState<number[]>([]);
  const [dislikedUsers, setDislikedUsers] = useState<number[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLike = (id: number) => {
    setLikedUsers((prev) => [...prev, id]);
    setDislikedUsers((prev) => prev.filter((userId) => userId !== id));
  };

  const handleDislike = (id: number) => {
    setDislikedUsers((prev) => [...prev, id]);
    setLikedUsers((prev) => prev.filter((userId) => userId !== id));
  };

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <SecondNavbar />
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
        {users.map((user) => (
          <div
            key={user.id}
            className="h-screen w-full snap-start flex flex-col items-center justify-center relative bg-white text-white"
          >
            <img
              src={user.profilePicture}
              alt={user.firstName}
              className="absolute inset-0 w-100 h-150 my-[10vh] mx-auto"
            />

            <div className="relative z-10 bg-black/50 backdrop-blur-md text-center mt-[25vh] p-2 max-w-sm">
              <h2 className="text-3xl font-bold">
                {user.firstName}, {user.age}
              </h2>
              <p className="mt-2 text-gray-300">{user.location}</p>
              <p className="mt-4">{user.bio}</p>
            </div>

            <div className="absolute bottom-16 flex gap-6 z-10">
              {user.id === 1 ? (
                <>
                  <button
                    onClick={() => handleLike(user.id)}
                    className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                  >
                    Like
                  </button>

                  <button
                    onClick={() => handleLike(user.id)}
                    className="bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                  >
                    Super Like
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleDislike(user.id)}
                    className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                  >
                    Dislike
                  </button>

                  <button
                    onClick={() => handleLike(user.id)}
                    className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                  >
                    Like
                  </button>
                </>
              )}
            </div>

            {likedUsers.includes(user.id) && (
              <div className="absolute top-10 right-10 text-green-400 text-xl font-bold z-10">
                ❤️ Liked
              </div>
            )}

            {dislikedUsers.includes(user.id) && (
              <div className="absolute top-10 right-10 text-red-400 text-xl font-bold z-10">
                ❌ Disliked
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Scroll;
