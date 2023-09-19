import {
    modelSetChildren,
    modelSetOpen,
    modelSetParams,
} from '../redux/modalSlice';

function checkLogger(userState, dispath) {
    if (!userState) {
        dispath(modelSetChildren(3));
        dispath(modelSetOpen(true));
        return false;
    } else {
        return true;
    }
}

export default checkLogger;
