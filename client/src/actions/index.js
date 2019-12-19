export const SIGN_IN = () => {
    return { type: 'SIGN_IN'}
};
export const SIGN_OUT = () => {
    return { type: 'SIGN_OUT'}
};
export const USER = input => {
    return {type: "USER", payload: input}
};
export const SHOW = () => {
    return { type: "SHOW"}
};
export const CLOSE = () => {
    return { type: "CLOSE"}
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