import { DAY_SWITCHER, NIGHT_SWITCHER } from './types'

export const switchDay = () => {
    return {
        type: DAY_SWITCHER,
    }
};

export const switchNight = () => {
    return {
        type: NIGHT_SWITCHER,
    }
};

