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
        <main className="relative">
            <img src={aboutWallpapper} alt="abstract wallpaper" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto releative">
                <section className="bg=green-800 rounded-lg shadow-2xl lg:flex p-20 z-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h2 className="cursive text-4xl text-green-300 mb-4 z-10">
                            Hey there. I'm {" "}
                            <span className="text-green-100">{author.name}</span>
                             . I am a self-taught web/software developer knowledgeable in widerange of development
                             languages and methodologies. My personality type is INFJ-T. All my projects can be founded on my github. To view my projects just click on the github icon on the top.
                             You can get in touch with me through Linkedin.
                        </h2>
                        <div className="prose lg:prosexl text-white"> 
                            <BlockContent blocks={author.bio} projectId="x530uecl" dataset="production"></BlockContent>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}