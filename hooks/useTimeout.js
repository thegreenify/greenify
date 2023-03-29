import { useEffect, useState } from 'react';

const useTimeout = () => {
	const [runable, setRunable] = useState(false);

	const run = (foo, timeout) => {
		if (!runable) {
			setRunable(true);
			setTimeout(() => {
				setRunable(false);
			}, timeout);
			return foo?.();
		}
		return {};
	};

	// useEffect(() => {
	// 	if (!runable) {
	// 		setTimeout(() => {
	// 			setRunable(true);
	// 		}, timeout);
	// 	}
	// }, [runable]);

	return run;
};

export default useTimeout;
