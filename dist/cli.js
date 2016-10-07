#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var channel_name = process.env.HUBOT_SLACK_CHANNEL_NAME || "#mine";
_index.slack.post(channel_name, process.argv.slice(2), function (err, file) {
  if (err) {
    console.error(err.stack);
    return;
  }
  console.log(file.thumb_80);
});