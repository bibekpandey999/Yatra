"use client";
import { useState } from "react";
import Image from "next/image";
export default function AdminLogin(){
    const [phone, setPhone]= useState("");
    const [password, setPassword]= useState("");

    return(
        <div className="flex min-h-screen items-center justify-center bg-white">
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                console.log({phone,password});
            }}
            className="flex flex-col gap-4 border-2 border-gray-200 shadow-xl rounded-2xl p-8 w-80 bg-white">
                <Image src="/logo.png" alt="Yatra" width={100} height={35}
                className="mx-auto mb-2"/>
                <h1 className="text-xl font-semibold text-primary">Admin Login</h1>
                <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 focus:border-primary focus:outline-none p-3 rounded-lg text-base text-gray-900 placeholder:text-gray-400"
                />
                <button 
                type="submit"
                className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition w-full">
                    Login
                    </button>
            </form>
        </div>
    );
}