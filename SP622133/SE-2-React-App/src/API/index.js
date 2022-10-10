import axios from "axios";

class API {
  static rapidApiOptions = {
    method: "GET",
    url: process.env.REACT_APP_RAPID_API_URL,
    params: { lang: "en", media: "True" },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };
  static getNewsArticles() {
    return axios.request(this.rapidApiOptions);
  }
  static postAddNumbers(firstParam, secondParam) {
    console.log("inputs", firstParam, secondParam);
    return axios.request({
      method: "POST",
      url: `${process.env.REACT_APP_EXPRESS_URL}/add`,
      data: {
        firstParam,
        secondParam,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default API;
