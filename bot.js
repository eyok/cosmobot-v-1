var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      //botRegex = /^\/meme$/,
      meme = /^\/meme$/,
      link = /^\/link$/,
      reserve = /^\/reserve$/,
      botRegea = /^\/bot$/,
      botRegeb = /^\/reserve$/,
      botRegec = /^\/nedza$/;
  
  if(request.text && meme.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } else if (request.text && link.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.ordercosmic.com/admin?verifyMe=39Efkeo93j");
    this.res.end();
    else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  
  
  
  
 
 /* if(request.text && botRegey.test(request.text)) {
    this.res.writeHead(200);
    postMessage2();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }*/
  /*if(request.text && botRegez.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && botRegea.test(request.text)) {
    this.res.writeHead(200);
    postMessage4();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
   if(request.text && botRegec.test(request.text)) {
    this.res.writeHead(200);
    postMessage6();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }*/
}

function postMessage(s) {
  var botResponse, options, body, botReq;

  botResponse = s;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
} //meme


exports.respond = respond;
