import React from 'react'

const Login = ({setShowLogin}) => {

     const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
    }

  return (
    <div onClick={()=> setShowLogin(false)} 
    className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50' >


      <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
    <p className="text-2xl font-medium m-auto">
        <span className="text-primary">User</span> Login
    </p>

    <div className="mt-4">
        <label className="block">Email</label>
        <input type="email" placeholder="type here" required
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"/>
    </div>

    <div className="mt-4">
        <label className="block">Password</label>
        <input type="password" placeholder="type here" required
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"/>
    </div>

    <p className="mt-4">
        Create an account?
        <a href="#" className="text-primary">Click here</a>
    </p>

    <button type="submit" className="bg-primary hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer">
        Login
    </button>
</form>
    </div>
  )
}

export default Login
