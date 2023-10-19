import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const phone = parseInt(form.phone.value);

    const user = { email, name, password, phone };

    fetch(
      "https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
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
              toast.success(data.message);
              localStorage.setItem("accessToken", data.token);
              navigate(from, { replace: true });
            });
        } else {
          setError(data.message);
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="md:w-2/5 mx-auto mt-10 mb-20">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-5">Join us today!</h1>
        {error ? (
          <h1 className="text-sm text-error">{error}</h1>
        ) : (
          <h1 className="text-sm">Lets enrich the life of our elders</h1>
        )}
        <input
          placeholder="NAME"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="text"
          name="name"
          required
        />
        <input
          placeholder="PHONE"
          className="rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-primary w-full my-4"
          type="number"
          name="phone"
          required
        />
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
        <button className="btn btn-primary w-full mt-4" type="submit">
          Sign Up
        </button>
      </form>
      <p className="mt-4 ">
        Already have an account?{" "}
        <Link className="link link-primary" to="/login">
          Log In
        </Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
