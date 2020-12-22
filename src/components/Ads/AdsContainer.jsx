import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {requestRooms, followAd, unfollowAd} from '../../redux/adsReducer';
import Ads from './Ads';
import {getRooms} from '../../redux/adsSelectors';

class AdsContainer extends React.Component {

    render() {
        return <>
            <Ads
                requestRooms={this.props.requestRooms}
                rooms={this.props.getRooms}
                followAd={this.props.followAd}
                unfollowAd={this.props.unfollowAd}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        getRooms: getRooms(state),
    }
}

export default compose(
    connect(mapStateToProps, {requestRooms, followAd, unfollowAd})
)(AdsContainer)
