import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendsElements = props.friends.map( f => <Friend name={f.name} /> )

    return (
        <div>
            { friendsElements }
        </div>
    )
}

export default MyFriends