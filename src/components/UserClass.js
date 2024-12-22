import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        userInfo:{
            name:"name",
            location:"location",
            login:"login",
            bio:"bio",
            avatar_url:"dummy.com"
        }
        };
        //console.log("child constructor called.")
    }

    async componentDidMount(){
        this.timer = setInterval(()=>{
            //console.log("compo interval called...");
        },1000);
        //console.log("child mount called.");
        const gitHubUserResponse = await fetch(GITHUB_USER_URL);
        const gitUserData = await gitHubUserResponse.json();
        const {name,location,login,bio,avatar_url} = gitUserData;
        this.setState({
        userInfo:{
            name:name,
            location:location,
            login:login,
            bio:bio,
            avatar_url:avatar_url
        }
        });

    }
    
    componentDidUpdate(){

    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render (){
        //console.log("child render called.")
        //const {name,location,contact}= this.props;
        const {name,location,login,bio,avatar_url}= this.state.userInfo;
        return (
            <div className="user-card">
            <img src={avatar_url} className="user-image"/>
            <h1>Name : {name}</h1>
            <h3>Bio : {bio}</h3>
            <h2>Location : {location}</h2>
            <h2>Contact: @{login}</h2>
            </div>
        );
    }
}
export default UserClass;