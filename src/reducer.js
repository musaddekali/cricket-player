export const ACTIONS = {
    LOADING_API:'loading-api',
    ALL_PlAYERS: 'all-players',
    ADD_PLAYER: 'add-player',
    SELECTED_PLAYER: 'selected-player',
    REMOVE_PLAYER: 'remove-player',
    ERROR: 'error',
    IS_VISIBLE: 'is-visible',
}

export const initialState = {
    allPlayers: [],
    selectedPlayers: [],
    loading: false,
}

export function playerReducer(state, action) {
    switch (action.type) {
        case ACTIONS.LOADING_API:
            return {
                ...state,
                loading: true,
            }
        case ACTIONS.ALL_PlAYERS:
            return {
                ...state,
                allPlayers: action.players,
                loading: false,
            };
        case ACTIONS.SELECTED_PLAYER:
            const selected = state.allPlayers.filter((player) => {
                return player.id === action.id;
            });
            return {
                ...state,
                selectedPlayers: [...state.selectedPlayers, ...selected],
            };
        case ACTIONS.REMOVE_PLAYER:
            const removed = state.selectedPlayers.filter((player) => {
                return player.id !== action.id;
            });
            return {
                ...state,
                selectedPlayers: removed,
            }
        default:
            return state;
    }
}