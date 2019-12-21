export const SIGN_IN = () => {
    return { type: 'SIGN_IN'}
};
export const SIGN_OUT = () => {
    return { type: 'SIGN_OUT'}
};
export const USER = input => {
    return {type: "USER", payload: input}
};
export const SHOWSIGNUP = () => {
    return { type: "SHOWSIGNUP"}
};
export const CLOSESIGNUP = () => {
    return { type: "CLOSESIGNUP"}
};
export const CHANGE = input => {
    return {type: "CHANGE", payload: input}
};
export const USERDATA = data => {
    return {type: "USERDATA", payload: data}
};
export const DELETEDATA = () => {
    return {type: "DELETEDATA"}
};
export const DELETEUSER = () => {
    return {type: "DELETEUSER"}
};
export const POSTS = () => {
    return {type: "POSTS"}
};
export const SHOWPOST = () => {
    return {type: "SHOWPOST"}
};
export const CLOSEPOST = () => {
    return {type: "CLOSEPOST"}
};