import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._callSubscriber(this._state);
	}
}

window.store = store;
export default store;