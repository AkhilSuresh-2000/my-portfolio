import React , {useEffect,useState}from 'react';
import sanityClient from "../client";
import { Link } from 'react-router-dom';

export default function Project(){

    const[projectData,setProjectData] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
          
        }`)
        .then((data) => setProjectData(data) )
        .catch(console.error);
    },[]);
    
    return(
        <main >
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive pt-5 ">My Projects</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12 pt-5"> Welcome to my Projects Page</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 { projectData && projectData.map((project,index) => (
                <article>
                    <Link to={"/project/" + project.slug.current} key={project.slug.current} >
                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index} >
                        <img src={project.mainImage.asset.url}
                         alt={project.mainImage.alt}
                         className="w-full h-full rounded-r object-cover absolute"
                        />
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4 text-white text-4xl" > 
                            <h3> {project.title} </h3>
                        </span>
                    </span>
                    </Link>
                </article>
               )) }
            </div>
        </section>
    </main>
    )
    
}