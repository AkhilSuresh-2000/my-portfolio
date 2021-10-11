import React from 'react';
import { useState } from 'react';
import {db} from "../Firebase";

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('Message Recieved I will get back asap 👍')
        })

        .catch(error => {
            alert(error.message)
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex justify-center items-center h-screen mx-auto bg-gray-100 contactbackgroud " >
        <form  className="w-full md:w-3/4 lg:w-3/6 p-4  blur" onSubmit={handleSubmit}>
        <div className="p-3">
            <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full 
            py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Name" value={name}
            onChange={(e)=> setName(e.target.value)}
            required/>
          </div>
          <div className="p-3">
            <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 
            text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Id" name="user_email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required />
          </div>
          <div className="p-3">
            <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md 
            w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message"  name="message" 
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            required></textarea>
          </div>
          <div className="p-3 pt-4">
          <input type="submit" className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl"></input>
          </div>
        </form>
      </div>
    )
}

export default Contact
