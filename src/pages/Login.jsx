import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    fetch(
      "https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/auth/signin",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          localStorage.setItem("accessToken", data.token);
          navigate(from, { replace: true });
        } else {
          setError(data.message);
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="md:w-1/3 mx-auto my-24">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-5 ">Welcome back</h1>
        {error ? (
          <h1 className="text-sm text-error">{error}</h1>
        ) : (
          <h1 className="text-sm">Our ship has been adrift without you.</h1>
        )}
        <input
          placeholder="EMAIL"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="email"
          name="email"
          required
        />
        <input
          placeholder="PASSWORD"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="password"
          name="password"
          required
        />
        <div className="flex justify-between items-center">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-xs rounded-none"
            />
            <span className="label-text ml-2">Remember me</span>
          </label>
        </div>

        <button
          className="btn btn-primary w-full mt-4"
          value="Send"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <p className="mt-4 ">
        Don't have an account?{" "}
        <Link className="link link-primary" to="/signup">
          Sign up
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
