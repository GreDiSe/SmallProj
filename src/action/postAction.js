import {
    CHANGE_NAME
} from "./actionTypes";

export const changeName = name => ({
    type: CHANGE_NAME,
    name: name
});
