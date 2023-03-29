import { useEffect, useState } from 'react';

const useApi = (apiCall, initialState) => {
	const [loading, setLoading] = useState(true);
	const [firstLoad, setFirstLoad] = useState(true);
	const [data, setData] = useState(initialState);

	const reload = () => {
		setLoading(true);
		apiCall().then((res) => {
			setData(res || data);
			setLoading(false);
			firstLoad && res != undefined && setFirstLoad(false);
		});
	};

	// run all the time when screen is focused
	useEffect(() => {
		apiCall().then((res) => {
			setData(res || data);
			setLoading(false);
			firstLoad && res != undefined && setFirstLoad(false);
		});
	}, []);

	return { firstLoad, loading, data, reload, setData };
};

export default useApi;
