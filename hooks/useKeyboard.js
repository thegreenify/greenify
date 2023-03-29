import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
	const [keyboardState, setKeyBoardState] = useState(false);

	useEffect(() => {
		const keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', () => setKeyBoardState(true));
		const keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', () => setKeyBoardState(false));

		return () => {
			keyboardWillShowSub.remove();
			keyboardWillHideSub.remove();
		};
	}, []);

	return keyboardState;
};

export default useKeyboard;
