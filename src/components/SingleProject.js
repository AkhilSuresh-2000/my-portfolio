import React ,{useEffect, useState}from "react"
import {useParams} from "react-router-dom"
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function SingleProject(){

    const[singleProject,setSingleProject] = useState(null);
    const {slug} = useParams();


    useEffect(()=>{
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            date,
            place,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            projectType,
            body,
            "name": author->name,
            "authorImage": author->image,
            link,
            tags
        
        }`).then((data) => setSingleProject(data[0]) )
        .catch(console.error);
    },[slug]);


    if(!singleProject) return <div>Loading...</div>;

    return(
        <main>
        <article className="container shadow-lg mx-auto  rounded-lg">
            <header className="releative">
                <div className="absolute h-full w-full items-center  justify-center p-8">  
                    <div>
                        <h1 className="cursive text-3xl lg:text-6xl mb-4">
                            <a
                                href={singleProject.link}
                                alt= {singleProject.title}
                                target = "_blank"
                                rel="noopener noreferrer"
                            > {singleProject.title} </a>
                            
                        </h1>
                        <div className="flex justify-center text-grey-800">
                            <img src={urlFor(singleProject.authorImage).url()}
                                alt={singleProject.name}
                                className="w-10 h-10 rounded-full"
                            /> 
                            <p className="cursive flex items-center pl-2 text-2xl">
                                {singleProject.name}
                            </p>
                        </div>
                    </div>
                </div>
                <img src={singleProject.mainImage.asset.url} alt={singleProject.title}
                    className="w-full object-cover rounded-t"
                    style={{height:"400px"}}
                />
                 <span>
                    <strong className="font-bold">Finished on</strong>:{"  "}
                             {new Date(singleProject.date).toLocaleDateString()}
                     </span>
                     <span>
                         <strong className="font-bold">Place</strong>:{"  "}
                         {singleProject.place}
                      </span>
                      <span>
                          <strong className="font-bold">Type</strong>:{"  "}
                          {singleProject.projectType}
                        </span>
                <div className="px-16 lg:px-48 lg:py-20 prose lg:prose-xl max-w-full">
                   <BlockContent blocks={singleProject.body}  projectId="x530uecl" dataset="production"/>
                    </div>
                    <p className="my-6 text-lg text=gray-700 leading-relaxed">{singleProject.description}</p>
                    <a href={singleProject.link} 
                                rel="noopener noreferrer"
                                target="_blank" 
                                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View The Project{" "}
                             <span role="img" aria-label="right pointer">
                                 👉
                         </span>
                    </a>  
            </header>
        </article>
    </main>
   );
}

    