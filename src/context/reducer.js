const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload)
            }

        default:
            return state;
    }
}

export default Reducer