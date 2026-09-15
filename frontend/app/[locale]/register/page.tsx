"use client";
import {use, useState} from "react";
import Link from "next/link";

export default function RegisterPage(){
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [role, setRole]= useState("rider");

    return(
        
        <div className="flex min-h-screen items-center justify-center bg-white">
            <form className="flex flex-col gap-4 border-2 border-gray-200 shadow-lg rounded-lg p-8 w-80 bg-white">
                <h1 className="text-xl font-semibold text-primary"> Register</h1>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className=" border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
                />
                <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                className=" border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
                />
                 <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className=" border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
                />

                <select
                value={role}
                onChange={(e)=> setRole(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 ">
                    <option
                value="transporter">Rider</option>
                    <option
                value="rider">Passenger</option>
                <option value="booking-partner">Booking Partner</option>
                </select>
               
                <button
            className="bg-primary text-white p-2 rounded">Register</button>
             <p className="text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link href="/en/login" className="text-primary font-semibold">
                    Login
                    </Link>
                </p>

            </form>
        </div>
    );
}