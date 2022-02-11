const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Daud', likesCount: 11, descr: "Lorem ipsum dolor sit amet consectetur."},
				{id: 1, message: 'Ibragim', likesCount: 8, descr: "Lorem ipsum dolor sit amet consectetur."},
				{id: 1, message: 'Muslim', likesCount: 32, descr: "Lorem ipsum dolor sit amet consectetur."},
			],
			newPostText: 'react-project',
		},
	
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Раяна" },
				{ id: 2, name: "Гапур" },
				{ id: 3, name: "Дауд" },
				{ id: 4, name: "Хади" },
				{ id: 5, name: "Зара" },
				{ id: 6, name: "Муслим" },
			],
			messages: [
				{ id: 1, message: "How are you?" },
				{ id: 2, message: "Hi" },
				{ id: 3, message: "Yo" },
				{ id: 4, message: "Whats up?" },
				{ id: 5, message: "Where you doing" },
				{ id: 6, message: "Hello" },
			],
			newMessageBody: ""
		},
	
		sideBar: {
		}
	},
	_callSubscriber () {
		console.log('State changed')
	},
	getState() {
		return this._state
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},
	dispatch (action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 7, message: body },)
			this._callSubscriber(this._state);
		}
	}
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  });

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  });

window.store = store;
export default store;