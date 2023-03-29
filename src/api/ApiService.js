import Api from "./Api";

export default {
  getEmployees(){
    return Api().get('employ/get-employ')
  },
  getAreas() {
    return Api().get(`area/get-areas`);
  },
  addArea(state, city, circle, zone, division, subDivision, pincode) {
    console.log(state, city, circle, zone, division, subDivision, pincode)
    return Api().post("area/add-area", {
      state,
      city,
      circle,
      zone,
      division,
      subDivision,
      pincode,
    });
  },
  getSurvey(){
    return Api().get("survey/get-survey")
  },
  getEmployByDesignation(designation){
    return Api().post("employ/get-employ-by-designation",{designation})
  },
  getHouse(){
    return Api().get("house/get-all-house")
  },
  addMeters(fromData){
    return Api().post("meter/add-meter",fromData)
  },
  getMeters(){
    return Api().get("meter/get-meters")
  },
  getProductName(){
    return Api().get("meter/get-product-name")
  }
};
