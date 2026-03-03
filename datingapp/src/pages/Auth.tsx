import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import type { UserData } from "../types/User";

type AuthError = "username" | "password" | null;

export default function Auth() {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<AuthError>(null);

  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  function login(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const user = users.find((u) => u.username === username);

    if (!user) {
      setError("username");
      return;
    }

    if (user.password !== password) {
      setError("password");
      return;
    }

    localStorage.setItem("username", username);
    // navigate("/profiles");
  }

  return (
    <form onSubmit={login} className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mx-4">

        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign In
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(null); }}
            aria-invalid={error === "username"}
            aria-describedby={error === "username" ? "username-error" : undefined}
            className={`w-full px-4 py-2 border rounded-lg text-sm text-gray-800
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                        focus:border-transparent transition
                        ${error === "username" ? "border-red-500 bg-red-50" : "border-gray-300"}`}
          />
          {error === "username" && (
            <p id="username-error" role="alert" className="mt-1 text-xs text-red-600">
              No account found with that username.
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(null); }}
              aria-invalid={error === "password"}
              aria-describedby={error === "password" ? "password-error" : undefined}
              className={`w-full px-4 py-2 pr-16 border rounded-lg text-sm text-gray-800
                          focus:outline-none focus:ring-2 focus:ring-indigo-500
                          focus:border-transparent transition
                          ${error === "password" ? "border-red-500 bg-red-50" : "border-gray-300"}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-3 text-xs font-medium text-gray-500 hover:text-indigo-600 transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error === "password" && (
            <p id="password-error" role="alert" className="mt-1 text-xs text-red-600">
              Incorrect password. Please try again.
            </p>
          )}
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                     font-semibold py-2.5 rounded-lg transition focus:outline-none
                     focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>

      </div>
    </form>
  );
}
