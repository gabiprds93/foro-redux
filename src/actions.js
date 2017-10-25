import store from './store';

export const addComment = (name, comment) => {
    const newIndex = store.getState().index + 1;
    const addCommentList = [...store.getState().comments,   {
        name: name,
        comment: comment,
        id : store.getState().comments.id + 1,        
    }];

    store.setState({
        comments: addCommentList,
        index: newIndex
    })
}