import { actionFactory } from '../../utils/factory';

const TOGGLE_NAVIGATION = 'TOGGLE_MENU';

const toggleMenu = actionFactory( TOGGLE_NAVIGATION, 'true' );

export {
    TOGGLE_NAVIGATION,
    toggleMenu
}