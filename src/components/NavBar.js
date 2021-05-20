import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';


export default function NavBar(){

    return (
        <header className="bg_transparent  container mx-auto "> 
            <div className = "container mx-auto flex justify-between">
                <nav className="flex">
                   <NavLink to="/"
                    exact 
                    activeClassName="text=white" 
                   className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-green-800 text-4xl font-bold cursive tacking-widest  glow ">
                       Home
                    </NavLink> 
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 text-black-100 hover:text-green-800 font-bold">
                       Blog Posts
                    </NavLink> 
                    <NavLink  to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 text-black-200 hover:text-green-800 font-bold" >
                       Projects
                    </NavLink> 
                    <NavLink to ="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 text-black-200 hover:text-green-800 font-bold" 
                    >
                       About me
                    </NavLink> 
                </nav>
                <div className="inline-flex py-3 py-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/akhil-suresh-1052411b6/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://github.com/AkhilSuresh-2000" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.instagram.com/akhilsuresh46/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                </div>
            </div>
        </header>
    );
}