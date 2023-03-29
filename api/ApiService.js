import Api from "./Api";
import staticResponses from "./StaticApiService";

export default false
  ? { ...staticResponses }
  : {
      sendLoginOTP: (phoneNumber, dialCode, deviceToken) =>
        Api.post(`user/signup`, { phoneNumber, dialCode, deviceToken }),
    };
