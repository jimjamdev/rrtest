import { actionFactory } from '../../utils/factory';

const TOGGLE_MENU:string = 'TOGGLE_MENU';

const toggleMenu:Object = actionFactory( TOGGLE_MENU, 'true' );

export {
    TOGGLE_MENU,
    toggleMenu
}