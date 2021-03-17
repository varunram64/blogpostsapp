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

export const fetchUser = (userId) => async dispatch => 
{
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data
    });
};
