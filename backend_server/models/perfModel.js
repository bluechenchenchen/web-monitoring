/*
 * @Author: blue
 * @Date: 2024-03-04 14:28:17
 * @FilePath: /web-monitoring/backend_server/models/perfModel.js
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
  dns: Number,
  tcp: Number,
  ssl: Number,
  ttfb: Number,
  trans: Number,
  dom: Number,
  res: Number,
  firstbyte: Number,
  fpt: Number,
  tti: Number,
  ready: Number,
  load: Number,
  navt: String,
  visitedUserId: String,
});

module.exports = mongoose.model("PerfDataInfo", schema);

// type: perf
const data = {
  page: "hubing.online",
  appKey: "5ea50b485b0dd76c634b9cf7",
  userId: "",
  visitedUserId: "f175af14-8240-4268-8004-1fad5b842b8d",
  os: "mac",
  bs: "chrome",
  pageWh: "1470x956",
  ua: "【来源:】Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  dns: 0,
  tcp: 108,
  ssl: 107,
  ttfb: 53,
  trans: 0,
  dom: 134,
  res: 44,
  firstbyte: 164,
  fpt: 164,
  tti: 298,
  ready: 298,
  load: 343,
  navt: "RELOAD",
};
