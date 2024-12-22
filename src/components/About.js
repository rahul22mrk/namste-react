import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("parent constructor called.")
    }
    componentDidMount(){
       // console.log("parent mount called.");
    }
    render(){
        //console.log("parent render called.")
        return (
            <div>
                <h1>About Me</h1>
                <UserClass
                    name={"Rahul Gupta (Class Based Component)"}
                    location={"Rewa"}
                    contact={"@rahul22mrk"}
                />
            </div>
        );
    }
}

export default About;