/*
 * @Author: blue
 * @Date: 2024-03-04 14:28:17
 * @FilePath: /web-monitoring/backend_server/models/jsModel.js
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  page: String,
  type: String,
  appKey: Schema.Types.ObjectId,
  os: String,
  bs: String,
  pageWh: String,
  ua: String,
  city_nameCN: String,
  country_nameCN: String,
  latitude: Number,
  longitude: Number,
  mostSpecificSubdivision_nameCN: String,
  onlineip: String,
  isp: String,
  organizationCN: String,
  error: String,
  visitedUserId: String,
});

module.exports = mongoose.model("JsDataInfo", schema);

// type: js
const data = {
  page: "https://hubing.online/#/",
  appKey: "5ea50b485b0dd76c634b9cf7",
  userId: "",
  visitedUserId: "f175af14-8240-4268-8004-1fad5b842b8d",
  os: "mac",
  bs: "chrome",
  pageWh: "1470x956",
  ua: "【来源:】Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  error:
    "%22Error%3A%20Uncaught%20(in%20promise)%3A%20ReferenceError%3A%20a7a%20is%20not%20defined%5CnReferenceError%3A%20a7a%20is%20not%20defined%5Cn%20%20%20%20at%201uat%20(https%3A%2F%2Fhubing.online%2F3.ae8ea7c8b83459a587df.js%3A5%3A25)%5Cn%20%20%20%20at%20u%20(https%3A%2F%2Fhubing.online%2Fruntime.55a72271a25ad1db1c18.js%3A1%3A507)%5Cn%20%20%20%20at%20Object.NFKh%20(https%3A%2F%2Fhubing.online%2F3.ae8ea7c8b83459a587df.js%3A1763%3A9)%5Cn%20%20%20%20at%20u%20(https%3A%2F%2Fhubing.online%2Fruntime.55a72271a25ad1db1c18.js%3A1%3A507)%5Cn%20%20%20%20at%204KjW%20(https%3A%2F%2Fhubing.online%2F3.ae8ea7c8b83459a587df.js%3A166%3A9)%5Cn%20%20%20%20at%20u%20(https%3A%2F%2Fhubing.online%2Fruntime.55a72271a25ad1db1c18.js%3A1%3A507)%5Cn%20%20%20%20at%20https%3A%2F%2Fhubing.online%2Fmain.2d8573729d14b9313b71.js%3A35596%3A24%5Cn%20%20%20%20at%20t.invoke%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A8160)%5Cn%20%20%20%20at%20Object.onInvoke%20(https%3A%2F%2Fhubing.online%2Fmain.2d8573729d14b9313b71.js%3A20325%3A31)%5Cn%20%20%20%20at%20t.invoke%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A8100)%5Cn%20%20%20%20at%20M%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A14076)%5Cn%20%20%20%20at%20M%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A13634)%5Cn%20%20%20%20at%20https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A14864%5Cn%20%20%20%20at%20t.invokeTask%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A8844)%5Cn%20%20%20%20at%20Object.onInvokeTask%20(https%3A%2F%2Fhubing.online%2Fmain.2d8573729d14b9313b71.js%3A20317%3A31)%5Cn%20%20%20%20at%20t.invokeTask%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A8765)%5Cn%20%20%20%20at%20e.runTask%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A4026)%5Cn%20%20%20%20at%20g%20(https%3A%2F%2Fhubing.online%2Fpolyfills.2adc1a5d09ddc6d5f0ef.js%3A1%3A11111)%22",
};
