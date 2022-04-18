"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTP_PATH: '"http://localhost"'
  //注意“”為必要要不然會出錯，要不相當於HTTP_PATH沒有使用‘’包起來
});

//Ajax時會時常用到HTTP_PATH
//環境變數設定除了dev.env.js（開發環境）外，prod.env.js(正式環境)也要同時設定才能在正式機上也能抓取
//新增環境變數後是要重啟才能讀到
