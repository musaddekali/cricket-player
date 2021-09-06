export const ACTIONS = {
    LOADING_API: 'loading-api',
    ALL_PlAYERS: 'all-players',
    SELECTED_PLAYER: 'selected-player',
    REMOVE_PLAYER: 'remove-player',
    ERROR: 'error',
    CLOSE_ERROR: 'close-error-msg',
    IS_VISIBLE: 'is-visible',
}

export const initialState = {
    allPlayers: [],
    selectedPlayers: [],
    loading: false,
    error: null,
    errorMsg: '',
    isVisible: false,
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
                // return null if player alrady exist 
                if (state.selectedPlayers.find(exPlayer => exPlayer.id === action.id)) {
                    return null;
                }
                // return null if player is more then 11
                if (state.selectedPlayers.length === 11) {
                    return null;
                }
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
            };

        case ACTIONS.ERROR:
            return {
                ...state,
                error: true,
                errorMsg: action.msg,
            };

        case ACTIONS.CLOSE_ERROR:
            return {
                ...state,
                error: false,
                errorMsg: '',
            };

        default:
            return state;
    }
}