import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://yt3.ggpht.com/a/AATXAJxT3uxirxnnN73dF1_kyWbrwHVU0tE4cPrb2VKk1Q=s900-c-k-c0x00ffffff-no-rj"
                     alt=""/>
                <a href="#">{props.message}</a>
            </div>
            <span>Like</span> {props.likesCount}
        </div>
    )
}

export default Post