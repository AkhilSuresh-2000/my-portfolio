import React from 'react'


export default function Home(){

    return (
        <main className="animate_home neon">
            <section className="releative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> 
            <span className="text pl-10" data-text="Hey there, thanks for visiting my page">Hey there, thanks for visiting my page </span>
             <span className="text" data-text="I am Akhil , I am a Web/Software developer"> 
               <a href="./About.js">I am Akhil , I am a Web/Software developer</a>
               </span>
             <span className="gradient"></span>
             <span className="spotlight"></span>
            </section>
        </main>
    );
}