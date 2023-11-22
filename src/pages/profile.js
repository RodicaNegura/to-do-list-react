import React from "react";
import ChangeProfile from "../changeProfile";

const Profile = (props) => {
  return (
    <div>
      {""}
      This is the profile page and the username  is: {props.username} 
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  )
}

export default Profile; 
