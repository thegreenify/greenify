const authReducer = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return {
				loggingIn: true,
				user: action.user,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state.user,
				...action.user,
				loggedIn: true,
				authenticated: true,
			};
		case 'LOGIN_FAILURE':
			return {};
		case 'LOGOUT':
			return {};
		case 'FETCH_USER':
			return { ...state, user: action.user };
		case 'SET_USER_PROFILE':
			return { ...state, is_profile_completed: action.is_profile_completed };
		case 'SET_USER_STATUS':
			return { ...state, is_new_user: action.is_new_user };
		default:
			return state;
	}
};

export default authReducer;
