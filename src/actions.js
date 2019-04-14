import axios from 'axios';

//Actions and Action Creators

//React-Redux
export function addItem(id, newItem) {
    console.log("addItem action called")
    const action = {
        id: id,
        title: newItem
    };
    return action
}

export function receiveItems(jsonPosts){
    const action = {
        type: "FETCH",
        payload: {
            items: jsonPosts
        }
    };
    return action
}

export function fetchItems() {
    return (dispatch) => {
        axios.get('https://my-json-server.typicode.com/ajtmike1/reactproject1/posts')
        .then(res => { 
            let jsonPosts = res.data
            console.log("jsonPosts.length = "+jsonPosts.length)
            dispatch(receiveItems(jsonPosts));
        })
    }
}

/*
export function fetchItems() {
    const action = {
        type: "FETCH",
        payload: {
            items: [{id:1, title:"item1"}]
        }
    };
    return action
}
*/




