const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialSate = {
  posts: [
    {
      id: 1,
      message: "Daud",
      likesCount: 11,
      descr: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      message: "Ibragim",
      likesCount: 8,
      descr: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      message: "Muslim",
      likesCount: 32,
      descr: "Lorem ipsum dolor sit amet consectetur.",
    },
  ],
  newPostText: "react-project",
  profile: null,
};

const profileReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
