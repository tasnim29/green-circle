import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigation = useNavigate();
  const { createUser, googleLogin, setUser, updateUserProfile, theme } =
    use(AuthContext);
  // passwordShow toggle state
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    const hasLowercase = /(?=.*[a-z])/.test(password);
    const hasUppercase = /(?=.*[A-Z])/.test(password);
    const hasMinLength = /.{8,}/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_\-+={}[\]:;"'|<>,.?/~`]/.test(password);

    if (!hasLowercase || !hasUppercase || !hasMinLength || !hasSpecialChar) {
      return toast.error(
        "Password must be at least 8 characters, include one lowercase and one uppercase letter, and a special character "
      );
    }

    // register with email
    createUser(email, password)
      .then((userCredential) => {
        const userInformation = userCredential.user;

        // updateUserProfile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userInformation, displayName: name, photoURL: photo });
            console.log(userInformation);

            toast.success("Successfully Registered");
            setTimeout(() => navigation("/"), 1500);
          })
          .catch(() => {
            setUser(userInformation);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.warn("Already have an account with this email");
      });
  };

  //   register with google
  const handleGoogle = () => {
    googleLogin()
      .then((userCredential) => {
        const userInformation = userCredential.user;
        console.log(userInformation);
        setUser(userInformation);
        toast.success("Successfully Signed in");
        setTimeout(() => navigation("/"), 1500);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Invalid password");
      });
  };
  return (
    <div className="flex flex-col w-full max-w-md mx-auto px-4 py-6 sm:px-6 sm:py-10 bg-green-50 border border-green-200 shadow-md rounded-md my-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">
          Register
        </h1>
        <p className="text-sm sm:text-base text-green-700">
          Create your account
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-10">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm text-green-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-green-300 rounded-md bg-green-100 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm text-green-800"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border border-green-300 rounded-md bg-green-100 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block mb-1 text-sm text-green-800"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter the URL of your image"
              className="w-full px-3 py-2 border border-green-300 rounded-md bg-green-100 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          {/* password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-green-800"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="*****"
              className={`w-full px-3 py-2 border border-green-300 rounded-md bg-green-100 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base ${
                theme === "dark" && "text-black"
              }`}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-4 top-8 cursor-pointer ${
                theme === "dark" && "text-black"
              }`}
            >
              {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          type="button"
          className="cursor-pointer flex items-center justify-center gap-2 bg-white text-green-700 border border-green-300 hover:bg-green-100 w-full px-4 py-2 rounded-md transition text-sm sm:text-base"
        >
          <FcGoogle size={20} /> Login with Google
        </button>

        <div className="space-y-2">
          <button
            type="submit"
            className="cursor-pointer w-full px-4 py-3 font-semibold rounded-md bg-green-600 text-white hover:bg-green-700 transition text-sm sm:text-base"
          >
            Register
          </button>
          <p className="px-6 text-sm text-center text-green-700">
            Already have an account?
            <Link
              to="/login"
              className="hover:underline text-green-800 font-medium ml-1"
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
