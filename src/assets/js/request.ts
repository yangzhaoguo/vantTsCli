import axios from "axios";
import { api } from "./config";

const $request: any = {};
$request.install = (Vue: any) => {
  Vue.prototype.$request = (
    url: string,
    type: string,
    data: any,
    retCallback: any,
    errCallback: any,
    loadingShow = true,
    timeout = 60000
  ) => {
    const showLoad = () => {
      if (loadingShow) {
        console.log("showLoading...");
      } else {
        console.log(1);
      }
    };

    const closeLoad = () => {
      console.log("closeLoading...");
    };

    type = type.toUpperCase();
    url = api + url;
    const opaction: object = {
      method: type,
      url,
      timeout,
      headers: {
        "Content-Type": "application/json",
        "access_token": "himyidea_test_token"
      },
      data
    };

    showLoad();
    axios(opaction).then(
      (response) => {
        setTimeout(() => {
          closeLoad();
          retCallback(response.data);
        }, 500);
      },
      (err) => {
        closeLoad();
        if (err.message !== "400") {
          errCallback(err);
        }
      }
    );
  };
};
export default $request;
