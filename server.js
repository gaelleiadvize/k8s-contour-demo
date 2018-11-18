/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

//[START all]
const http = require('http');
var handleRequest = (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  //res.end(`Hello Word `${process.env.VERSION}`!`);
  res.end(
    `<div style="text-align: center; font-size: 60px">
<p>Here is my Hello World !</p>
<p><strong>${process.env.VERSION}</strong></p>
</div>`
  );

};
const server = http.createServer(handleRequest);
server.listen(process.env.PORT || 8080);

// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/plain');`
//   res.send('Hello Word v1 !');
// });
//
// app.get('/healthcheck', (req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(200).json({status:'ok'});
// });
//
// app.listen(process.env.PORT || 8080);


// [END all]
