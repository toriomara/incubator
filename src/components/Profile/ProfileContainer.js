import React, {Component} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
//7, 12, 25 (Отказываюсь от серого цвета пока что, кнопки будут чёрными с белым текстом внутри и/или чёрная кайма.)
// 35 Этот пункт уже устарел, 52, 54-56 Нужны ли подменю?

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
