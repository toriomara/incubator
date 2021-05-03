import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img src="https://sun9-32.userapi.com/c633923/v633923026/1f458/tDv8EZhAefE.jpg" alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
                <ProfileStatus status={'Hello WORLD! '}/>
            </div>
        </div>
    )
}

export default ProfileInfo
