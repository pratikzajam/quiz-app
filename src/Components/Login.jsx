import React, { useState,useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import { authContext } from "../Context/authContext";



const Login = () => {

   let {auth,ChangeAuth}= useContext(authContext);

  console.log(auth,ChangeAuth)
   console.log(auth)

    let Navigate=useNavigate()


    const [data, setData] = useState({ email: "", password: "" });
    const [loader, setLoader] = useState(false);

    let handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);

        try {
            let req = await axios.post("https://reqres.in/api/login", {
                email: data.email,
                password: data.password
            });

            setLoader(false);
            if (req.status === 200) {
                alert("🎉 Welcome to the Quiz!");
                ChangeAuth()
                Navigate("/dashboard")
            }
        } catch (error) {
            setLoader(false);
            alert("⚠️ Incorrect email or password!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-6">Quiz Login 🧠</h2>
                <p className="text-center text-gray-600 mb-4">Test your knowledge and have fun!</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Email</label>
                        <input onChange={(e) => setData({ ...data, email: e.target.value })}
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Password</label>
                        <input onChange={(e) => setData({ ...data, password: e.target.value })}
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>
                   
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition flex items-center justify-center"
                    >
                        {loader ? "🔄 Logging in..." : "🚀 Start Quiz"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
