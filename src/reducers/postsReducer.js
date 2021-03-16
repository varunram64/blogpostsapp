import { bindActionCreators } from "redux";

export default (fetchPosts, action) => {
    if(action.type === "") {
        return action.payload;
    }
    return fetchPosts;
};