import { TEST_DISPATCH } from './types';

//Register User
export const registeruser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    };
};