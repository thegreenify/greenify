// react hook that handles an async function
 import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../state/actions/authActions';
// import { closePopup, setPopup } from '../state/actions/popupActions';

const useConditionWrapper = () => {
	 const state = useSelector((state) => state);
	 const dispatch = useDispatch();

	// handle foo where foo is an async function that calls api
	const conditionalWrapper = async (foo, finalFoo = () => {}, showPopUp = true) => {
		try {
			// if (state.offline.isInternetReachable) {
				return await foo();
			// }
		} catch (e) {
			// console.log(JSON.stringify(e));
			if (showPopUp) {
				// switch (e.response?.status) {
				// 	case 401:
				// 		setPopup(dispatch, {
				// 			title: 'Session Expired',
				// 			message: 'Please login again',
				// 			cta: {
				// 				text: 'OK',
				// 				onPress: () => {
				// 					logout(dispatch);
				// 					closePopup(dispatch);
				// 				},
				// 				backgroundColor: '#2D9140',
				// 			},
				// 		});
				// 		break;
				// 	case 423:
				// 		setPopup(dispatch, {
				// 			title:
				// 				typeof e.response?.data?.title === 'string'
				// 					? e.response?.data?.title
				// 					: 'Something went wrong',
				// 			message:
				// 				typeof e.response?.data?.message === 'string'
				// 					? e.response?.data?.message
				// 					: 'Please try again later',
				// 			lock: true,
				// 			cta: {
				// 				text: 'OK',
				// 				onPress: () => {
				// 					closePopup(dispatch);
				// 				},
				// 				backgroundColor: '#2D9140',
				// 			},
				// 		});
				// 		break;
				// 	default:
				// 		setPopup(dispatch, {
				// 			title:
				// 				typeof e.response?.data?.title === 'string'
				// 					? e.response?.data?.title
				// 					: 'Something went wrong',
				// 			message:
				// 				typeof e.response?.data?.message === 'string'
				// 					? e.response?.data?.message
				// 					: 'Please try again later',
				// 			cta: {
				// 				text: 'OK',
				// 				onPress: () => {
				// 					closePopup(dispatch);
				// 				},
				// 				backgroundColor: '#2D9140',
				// 			},
				// 		});
				// 		break;
				// }
			}
			finalFoo(e);
		}
		return;
	};

	return conditionalWrapper;
};

export default useConditionWrapper;
