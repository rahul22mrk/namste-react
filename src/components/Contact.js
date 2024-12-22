import { useEffect } from "react";
const Contact = () =>{
    useEffect(()=>{
       const timer= setInterval(()=>{
            console.log("contact interval called...");
        },1000);

        return ()=>{
            clearInterval(timer);
        };
    });
    return (
        <div>
            <h1>Contact Us Page</h1>
        </div>
    );
}

export default Contact;