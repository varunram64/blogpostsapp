import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceHolder';

//actions

export const fetchPosts = () => async dispatch => 
{
    const responsePosts = await jsonPlaceholder.get("/posts");

    dispatch({
        type: "FETCH_POSTS",
        payload: responsePosts.data
    });
};

// Memoize from lodash library to same get data once 

export const fetchUser = (userId) => dispatch =>  _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
});