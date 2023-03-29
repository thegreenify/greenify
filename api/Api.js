import axios from "axios";
// import axiosRetry from 'axios-retry';
import NetInfo from "@react-native-community/netinfo";
// import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Constants from "expo-constants";

// assign url based on build for prod and dev
const inProduction = process.env.NODE_ENV === "production";
const inExpo = Constants.manifest && Constants.manifest.debuggerHost;
const inBrowser = typeof document != "undefined";
const apiDomain = inProduction
  ? "mywebsite.com"
  : inExpo
  ? `${Constants.manifest.debuggerHost.split(`:`).shift()}:8000`
  : inBrowser
  ? `${document.location.hostname}:8000`
  : "unknown";

const protocol = inProduction ? "https" : "http";

const apiUrl = `${protocol}://${apiDomain}`;

// from AsyncStorage
const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  return { token };
};

export const server = async (contentType) => {
  try {
    const state = await getToken();
    const axiosInstance = axios.create({
      baseURL:`${apiUrl}`,
      headers: {
        "Content-Type":contentType==="formData"?"multipart/form-data":"application/json",
        authorization: state?.token ? `JWT ${state?.token}` : undefined,
      },
    });

    axiosInstance.interceptors.request.use((config) => {
      return config;
    });
    axiosInstance.interceptors.response.use((response) => {
      if (
        response.request.responseURL ===
        `${response.config.baseURL}/${response.config.url}`
      )
        return response;
      else throw new Error("Response URL does not match request URL");
    });

    // axiosInstance.defaults.timeout = 1000;

    // axiosRetry(axiosInstance, {
    // 	retries: 3,
    // 	retryDelay: axiosRetry.exponentialDelay,
    // 	retryCondition: axiosRetry.isRetryableError,
    // });

    return axiosInstance;
  } catch (e) {}
};

// export get and post request interface
export default {
  get: async (url, params) => (await server()).get(url, params),
  post: async (url, data) => {
    const netInfo = await NetInfo.fetch();
    return (await server()).post(url, {
      ...data,
      netInfo,
      // deviceID: DeviceInfo.getUniqueId(),
    });
  },
  put: async (url, data) => (await server()).put(url, data),
  delete: async (url) => (await server()).delete(url),
  postForm:async (url, formData)=> (await server('formData')).post(url, formData),
};

// a function that wraps the apiCalls and handles the no internet connection error else returns the response under the same
// export default {
//     get: (url, params) => {
//         return NetInfo.fetch().then(state => {
//             if (state.isConnected) {
//                 return server().get(url, params);
//             }
//         });
//     },
//     post: (url, data) => {
//         return NetInfo.fetch().then(state => {
//             if (state.isConnected) {
//                 return server().post(url, data);
//             }
//         });
//     },
// };
