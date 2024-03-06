/*
 * @Author: blue
 * @Date: 2024-03-04 14:28:17
 * @FilePath: /web-monitoring/backend_server/models/resourceModel.js
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  type: String,
  page: String,
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
  rUrl: String,
  rEntryType: String,
  rInitiatorType: String,
  rDuration: Number, //单位ms
  rSize: Number,
  visitedUserId: String,
});

module.exports = mongoose.model("ResourceDataInfo", schema);

// type: resource
const data = {
  page: "https://hubing.online/#/home",
  appKey: "5ea50b485b0dd76c634b9cf7",
  userId: "",
  visitedUserId: "f175af14-8240-4268-8004-1fad5b842b8d",
  os: "mac",
  bs: "chrome",
  pageWh: "1470x956",
  ua: "【来源:】Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  rUrl: "https://hubing.online/#/home",
  rEntryType: "navigation",
  rInitiatorType: "navigation",
  rDuration: 0,
  rSize: 300,
};
