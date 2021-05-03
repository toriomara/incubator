import React from "react"
import s from "./Friend.module.css"

const Friend = (props) => {
    return (
        <div>
            <img src="https://yt3.ggpht.com/a/AATXAJxT3uxirxnnN73dF1_kyWbrwHVU0tE4cPrb2VKk1Q=s900-c-k-c0x00ffffff-no-rj"
                 alt=""/>
            {props.name}
        </div>
    )
}

export default Friend