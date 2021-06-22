import React , {useEffect , useState} from "react";
import sanityClient from "../client";
import aboutWallpapper from "../AboutmeWallPaper.jpg";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){

    const[author,setAuthor] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    },[]);
    
    if(!author) return <div>Loading....</div>

    return (
        <div className="aboutWall">
             <img src={aboutWallpapper} alt="abstract wallpaper" className="absolute w-full h-full" />
            <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto releative flex flex-wrap">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 z-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-2xl text-green-300 mb-4  w-full ">
                            Hey there. I'm {" "}
                            <span className="text-green-600 ">{author.name}</span>
                             . I am a self-taught web/software developer knowledgeable in widerange of development
                             languages and methodologies. My personality type is INFJ-T. All my projects can be found on my github. To view my projects just click on the github icon on the top.
                             You can get in touch with me through Linkedin. I enjoy nature,anime and videogames.
                        </h1>
                    </div>
                </section>
            </div>
        </main>
        </div>
        
    )
}