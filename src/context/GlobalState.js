import React, {createContext, useReducer, useEffect} from 'react'
import Reducer from './reducer.js'
const initialState = {
    watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],

    watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}

// context
export const GlobalContext = createContext(initialState)

// provider
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])
    
    //actions 
    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_TO_WATCH_LIST", payload: movie})
    }    

    const removeMovieFromWatchList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    
    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList, 
                watched: state.wathed,
                addMovieToWatchList,
                removeMovieFromWatchList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext