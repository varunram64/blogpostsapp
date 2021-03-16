import jsonPlaceholder from '../apis/jsonPlaceHolder';

//actions

export const fetchPosts = () => async dispatch => 
{
    const responsePosts = await jsonPlaceholder.get("/posts");

    dispatch({
        type: "FETCH_POSTS",
        payload: responsePosts
    });
};
