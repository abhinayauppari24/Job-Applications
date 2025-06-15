import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { assets } from "../../assets/assets";
import { Routes, Route } from "react-router-dom";
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Navbar = () =>{

    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    

  const switchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const switchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

    return(
        <div className='flex items-center justify-between px-4 sm:px-10 md:px-14
                      lg:px-36 border-b border-gray-500 py-4 bg-sky-950 '>
            <Link to="/">
                <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
            </Link>
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
            
                <div className='flex items-center gap-5 text-white'>
                    <Link to='/internshipspage'>Internships</Link>
                    <Link to='/jobspage'>Jobs</Link>
                    
                    <div className="relative group inline-block">
                    <div className="cursor-pointer text-white select-none px-3 py-2">
                        Applied ▾
                    </div>
                    <div
                        className="absolute left-0 top-full mt-0 hidden group-hover:block
                                bg-white text-black rounded shadow-md w-48 z-50"
                        style={{ minWidth: '180px' }}>
                        <Link
                        to="/student/Internship"
                        className="block px-4 py-2 hover:bg-gray-200"
                        >
                        Applied Internships
                        </Link>
                        <Link
                        to="jobs"
                        className="block px-4 py-2 hover:bg-gray-200"
                        >
                        Applied Jobs
                        </Link>
                    </div>
                    </div>

                   
                </div>
                <button onClick={() => setShowSignup(true)}
                    className='bg-sky-700 text-white px-5 py-2 rounded-full'>
                    Create Account
                </button>
            </div>

            {showSignup && (
                <Signup onClose={() => setShowSignup(false)} switchToLogin={switchToLogin} />
             )}
            {showLogin && (
                 <Login onClose={() => setShowLogin(false)} switchToSignup={switchToSignup} />
             )}

            {/* for screens */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-white'>
                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                    <Link to='/student/internship'>Internships</Link>
                    <Link to='/job'>Jobs</Link>

                    <div className="relative group inline-block">
                    <div className="cursor-pointer text-white">
                        Applied ▾
                    </div>
                    <div
                        className="absolute  top-full mt-0 hidden group-hover:block
                                bg-white text-black rounded shadow-md w-48 z-50"
                        style={{ minWidth: '180px' }}>
                        <Link
                        to="/student/Internship"
                        className="block px-4 py-2 hover:bg-gray-200"
                        >
                        Applied Internships
                        </Link>
                        <Link
                        to="jobs"
                        className="block px-4 py-2 hover:bg-gray-200"
                        >
                        Applied Jobs
                        </Link>
                    </div>
                    </div>

                    
                </div>
                <button className='bg-white rounded-full '  
                    onClick={() => setShowSignup(true)}>
                    <img src={assets.user_icon} alt="UserIcon" />
                </button>
            </div>
        </div>
    )
}
export default Navbar