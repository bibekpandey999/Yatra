export default function LoginPage() { 
    return (
         <div className="flex min-h-screen items-center justify-center bg-slate-100"> <form className="flex flex-col gap-4 bg-white p-8 rounded w-80"> 
         <h1 className="text-xl font-semibold text-ink">Login</h1> <input type="email" placeholder="Email" className="border p-2 rounded" /> 
         <input type="password" placeholder="Password" className="border p-2 rounded" /> 
         <button className="bg-primary text-white p-2 rounded">Log In</button> 
         </form> </div> ); 
         }