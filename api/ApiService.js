import Api from "./Api";
import staticResponses from "./StaticApiService";

export default false
  ? { ...staticResponses }
  : {
      sendLoginOTP: (phoneNumber, dialCode, deviceToken) =>
        Api.post(`user/signup`, { phoneNumber, dialCode, deviceToken }),
      sendOtp: (phoneNumber) => Api.post("user/send_otp", { phoneNumber }),
      userLogin: (phoneNumber, OTP, emailVerified) =>
        Api.post("user/login", { phoneNumber, OTP, emailVerified }),
      userUpdate: (firstName, lastName, dateOfBirth, buffer, pick) =>
        Api.post(`user/update`, {
          firstName,
          lastName,
          dateOfBirth,
          buffer,
          pick,
        }),
      update: (
        gender,
        work,
        dateOfBirth,
        email,
        phonNumber,
        livesIn,
        dialCode
      ) =>
        Api.post(`user/update`, {
          gender,
          work,
          dateOfBirth,
          email,
          phonNumber,
          livesIn,
          dialCode,
        }),
      updateArea: (departmentContact, mainTanks) =>
        Api.post("area/update-area", { departmentContact, mainTanks }),
      getArea: (areaId) => Api.post("survey/get-area", { areaId }),
      getSurvey: () => Api.get("survey/get-survey"),
      updateSurvey: (surveyId) =>
        Api.post("survey/update-survey", { surveyId }),
      addAreaContact: (
        fullName,
        designation,
        contactNumber,
        email,
        contactId,
        areaId
      ) =>
        Api.post("survey/add-area-contact", {
          fullName,
          designation,
          contactNumber,
          email,
          contactId,
          areaId,
        }),
      addMainTank: (
        tankCapacity,
        inletPipeType,
        inletPipeSize,
        outletPipeType,
        outletPipeSize,
        supplyingAgency,
        tankId,
        areaId
      ) =>
        Api.post("survey/add-area-main-tank", {
          tankCapacity,
          inletPipeType,
          inletPipeSize,
          outletPipeType,
          outletPipeSize,
          supplyingAgency,
          tankId,
          areaId,
        }),
      getAreaMainTank: (areaId) =>
        Api.post("survey/get-area-main-tank", { areaId }),
      addTower: (numberOfTower, areaId) =>
        Api.post("survey/add-tower", { numberOfTower, areaId }),
      getTower: (areaId) => Api.post("survey/get-tower", { areaId }),
      updateTower: (towerId, totalFloor) =>
        Api.post("survey/update-tower", { towerId, totalFloor }),
      addTank: (
        towerId,
        tankCapacity,
        inletPipeType,
        inletPipeSize,
        usesFor,
        outlets,
        supplyingFloors,
        mainTankId
      ) =>
        Api.post("survey/add-tank", {
          towerId,
          tankCapacity,
          inletPipeType,
          inletPipeSize,
          usesFor,
          outlets,
          supplyingFloors,
          mainTankId,
        }),
      addHouse: (areaId,houseType, towerId, tankId, floorNumber, totalHouse) =>
        Api.post(
          "survey/add-house",
          areaId,
          houseType,
          towerId,
          tankId,
          floorNumber,
          totalHouse
        ),
      getHouse: (houseAdd,houseType) => Api.post("house/get-house", { houseAdd,houseType }),
      updateHouse: (
        houseId,
        houseNumber,
        houseType,
        houseID,
        tankCapacity,
        inletType,
        inletSize,
        usages,
        loftOutletSize,
        loftOutletType,
        loftUsage
      ) =>
        Api.post("house/update-house", {
          houseId,
          houseNumber,
          houseType,
          houseID,
          tankCapacity,
          inletType,
          inletSize,
          usages,
          loftOutletSize,
          loftOutletType,
          loftUsage,
        }),
        updateHouseById: (
          houseId,
          houseNumber,
          houseType,
          houseID,
          inlets,
          loftOutletSize,
          loftOutletType,
          loftUsage
        ) =>
          Api.post("house/update-house", {
            houseId,
            houseNumber,
            houseType,
            houseID,
            inlets,
            loftOutletSize,
            loftOutletType,
            loftUsage,
          }),
      getHouseById: (houseId) => Api.post("house/get-house-by-id", { houseId }),
      addLoft: (houseId, loftOutletSize, loftOutletType, loftUsage) =>
        Api.post("house/add-loft", {
          houseId,
          loftOutletSize,
          loftOutletType,
          loftUsage,
        }),
    };
