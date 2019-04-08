export const changeSearchField = (text) => ({
    type:"CHANGE_SEARCH_FIELD",
    payload:text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type:'REQUEST_PENDING',isPending:true})
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
       .then((robots) => {
        console.log(robots);
        dispatch({type:'REQUEST_SUCCESS',robots:robots,isPending:false})
       })
       .catch((err) => dispatch({type:'REQUEST_FAILED',error:err,isPending:false}))
}