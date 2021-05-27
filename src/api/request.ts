import config from "./config";


const ApiUrl:string = "https://www.fastmock.site/mock/4de86fcd3e99496b39138793bb2c337d/route";
// 前端测试数据
export const getCheck = async (data?:any) => {
  let responseData = await config({
    url: ApiUrl + "/check",
    method: "get",
  });
  return responseData;
};

export const getAdmin = async (data?:any) => {
  let responseData = await config({
    url: ApiUrl + "/admin",
    method: "get",
  });
  return responseData;
};