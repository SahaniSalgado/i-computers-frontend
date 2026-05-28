import { BsKeyboard } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    return(
        <div className=" w-full h-full bg-[url('/login-bg.jpg')] bg-cover flex bg-no-repeat justify-center items-center ">

            {/* Login */}

            <div className=" w-[400px] h-[600px] backdrop-blur-lg shadow-lg shadow-white rounded-lg flex flex-col p-4 ">
               
                <h1 className="w-full h-[80px] text-center text-3xl font-bold text-white p-5">
                    Login
                </h1> 

                {/* ENTER EMAIL */}
                    <div className="w-full">
                    <label className="text-white text-lg flex items-center gap-2">
                    <MdEmail /> Email
                    </label>

                    <input type="email" 
                    onChange={
                        (e) => setEmail(e.target.value)
                    } 
                    value={email}
                    type="email"
                    className="w-full h-[40px] rounded-md px-2 border border-white"  placeholder="enter your email" /> 


            
                {/* ENTER PASSWORD */}
                    <div className="w-full">
                    <label className="text-white text-lg flex items-center gap-2 mt-5">
                    <BsKeyboard/> Password
                    </label>

                    <input type="password" 
                    onChange={
                        (e) => setPassword(e.target.value)
                    } 
                    value={password}
                    type="password"
                    className="w-full h-[40px] rounded-md px-2 border border-white "  placeholder="enter your password" /> 

                {/* FORGOT PASSWORD */}
                    <p className="w-full mt-2 text-white text-right italic">
                        Forgot your password? click {" "}
                    <Link to="/forget-password" className="font-bold text-amber-200">
                        HERE
                    </Link>
                    </p>

                {/* SIGN IN BUTTON */}
                    <button onClick={handleLogin} className="w-full h-[50px] bg-blue-950 mt-10 text-white rounded-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-800">
                        Sign In</button>

                {/* CREATE A ACCOUNT*/}        

                    <p className="w-full mt-2 text-white text-right italic">
                        Don't have an account? click {" "}
                    <Link to="/forget-password" className="font-bold text-amber-200">
                        HERE
                    </Link>
                    </p>


                {/* SIGN IN WITH GOOGLE */}
                    <button className="w-full h-[50px] bg-cyan-950 mt-10 text-white rounded-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-800 flex items-center justify-center gap-2">
                    <GrGoogle />
                    Sign in with Google
                    </button>
            
            </div>

            </div>


            </div>
            

        </div>
    )
}