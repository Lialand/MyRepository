import { PLAYER_SWITCHER, VIEWER_SWITCHER } from '../types'

export const switchPlayer = () => {
    return {
        type: PLAYER_SWITCHER
    }
};

export const switchViewer = () => {
    return {
        type: VIEWER_SWITCHER
    }
};
