const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({ id: 7, message: body })
			return state;
		default:
			return state;
	}

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  });

export default dialogsReducer;