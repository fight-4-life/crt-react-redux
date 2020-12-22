const adJson = require('../api/entities.json')

const FOLLOW_ROOM = 'ads/FOLLOW_ROOM';
const UNFOLLOW_ROOM = 'ads/UNFOLLOW_ROOM';

export const actions = {
    followRoomSuccess: (roomId: number) => ({type: FOLLOW_ROOM, roomId} as const),
    unfollowRoomSuccess: (roomId: number) => ({type: UNFOLLOW_ROOM, roomId} as const)
}

export const followAd = (roomId: number) => {
    return (dispatch: any) => {
        dispatch(actions.followRoomSuccess(roomId))
    }
}

export const unfollowAd = (roomId: number) => {
    return (dispatch: any) => {
        dispatch(actions.unfollowRoomSuccess(roomId))
    }
}
const setRooms = (rooms: Array<RoomsType>) => ({type: SET_ROOMS, rooms})
const SET_ROOMS = 'ads/SET_ROOMS';

export const requestRooms = () => {
    return (dispatch: any) => {
        const rooms = adJson.response
        dispatch(setRooms(rooms))
    }
}

let initialState = {
    rooms: [] as Array<RoomsType>
}

type InitialStateType = typeof initialState

type RoomsType = {
    type: string,
    id: number,
    attributes: {
        title: string,
        rooms: number,
        address: {
            city: string,
            street: string,
            house: string,
            room: string
        },
        area: number,
        unit: string
    },
    relationships: {
        type: string,
        id: number,
        attributes: {
            first_name: string,
            last_name: string,
            middle_name: string
        }
    }
}

const adsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_ROOMS:
            return {...state, rooms: action.rooms}
        case FOLLOW_ROOM:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.roomId) {
                        return {...room, followed: true}
                    }
                    return room;
                })
            }
        case UNFOLLOW_ROOM:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.roomId) {
                        return {...room, followed: false}
                    }
                    return room;
                })
            }
        default:
            return state
    }
}

export default adsReducer