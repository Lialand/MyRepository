import { DAY_SWITCHER, NIGHT_SWITCHER } from './types'

const initialState = {
    activeDay: '',
    activeNight: 'active'
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAY_SWITCHER:
            return {...state, activeDay: 'active', activeNight: ''}
        case NIGHT_SWITCHER:
            return {...state, activeDay: '', activeNight: 'active'}
    }
    return state;
}; 

