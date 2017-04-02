import { actionFactory } from '../../utils/factory';

const TOGGLE_NAVIGATION:string = 'TOGGLE_MENU';

const toggleMenu:Object = actionFactory( TOGGLE_NAVIGATION, 'true' );

export {
    TOGGLE_NAVIGATION,
    toggleMenu
}