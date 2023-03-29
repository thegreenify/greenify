import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiService from '../../api/ApiService';
import axios from 'axios';

export const getNumber = (dispatch, data) => dispatch({ type: 'LOGIN_REQUEST', user: data });
const getToken = async () => {
	const token = await AsyncStorage.getItem("token");
	return { token };
  };

export const updateUser = async (dispatch) => {
	try {
		const state = await getToken();
		const res = await ApiService.getUser();
		// const config = {
		// 	headers: {
		// 		"Content-Type":"application/json",
		// 		authorization: state?.token ? `JWT ${state?.token}` : undefined,
		// 	  },
		//   };
		// const res=await axios.get("http://helonodeserver-env.eba-24ucv77z.ap-south-1.elasticbeanstalk.com/user/get_user", config);
		return dispatch({ type: 'FETCH_USER', user: res.data });
	} catch (e) {
		// Alert.alert(e.response?.data?.message || 'Something went wrong', 'Please try again later', [{ text: 'OK' }]);
	}
};

export const authSuccessful = (dispatch, user) => {
	return dispatch({ type: 'LOGIN_SUCCESS', user });
};

export const authFailed = () => {
	return { type: 'LOGIN_FAILURE' };
};

export const logout = (dispatch) => {
	AsyncStorage.clear();
	// setStore(dispatch, {});
	// setFlyerStore(dispatch, {});
	return dispatch({ type: 'LOGOUT' });
};

export const setUserProfile = (dispatch, is_profile_completed) => {
	return dispatch({ type: 'SET_USER_PROFILE', is_profile_completed });
};

export const setUserStatus = (dispatch, is_new_user = false) => {
	return dispatch({ type: 'SET_USER_STATUS', is_new_user });
};
