import createStore from "redux-zero";

let COMMENTS = [
	{
        name: "Morgan McCircuit",
        comment: "Content marked as abusive",
		id: 1,
	},
	{
		name: "Bending Bender",
        comment: "Excellet stuff",
		id: 2,
    },
]

const initialState = {
	comments: COMMENTS,
	index: COMMENTS.length
};

const store = createStore(initialState);

export default store;