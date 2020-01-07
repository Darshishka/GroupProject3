export const USER = input => {
    return {type: "USER", payload: input}
};
export const SHOWSIGNUP = () => {
    return { type: "SHOWSIGNUP"}
};
export const CLOSESIGNUP = () => {
    return { type: "CLOSESIGNUP"}
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
export const SHOWCOMMENT = () => {
    return {type: "SHOWCOMMENT"}
};
export const CLOSECOMMENT = () => {
    return {type: "CLOSECOMMENT"}
};
export const POSTID = input => {
    return {type: "POSTID", payload: input}
};
export const FILTER = input => {
    return {type: "FILTER", payload: input}
};