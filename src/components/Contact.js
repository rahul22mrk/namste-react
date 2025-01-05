import { useEffect } from "react";
const Contact = () =>{
    useEffect(()=>{
       const timer= setInterval(()=>{
          //  console.log("contact interval called...");
        },1000);

        return ()=>{
            clearInterval(timer);
        };
    });
    return (
        <div>
            <h1 className="font-bold text-3xl p-5 m-5">Contact Us Page</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"/>
                <input type="text" className="p-2 m-2 border border-black" placeholder="message"/>
                <button type="button" className="bg-gray-200 p-2 m-2 cursor-pointer border border-black rounded-lg" >submit</button>
            </form>
        </div>
    );
}

export default Contact;