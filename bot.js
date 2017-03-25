var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/meme$/,
      botRegey = /^\/link$/,
      botRegez = /^\/sign$/,
      botRegea = /^\/help$/,
      botRegeb = /^\/drop$/,
      botRegec = /^\/shift$/,
      botReged = /^\/policies$/,
      botRegee = /^\/reserve$/;
  
  if(request.text && ((botRegeb.test(request.text))||(botRegee.test(request.text)))) {
    this.res.writeHead(200);
    postMessage2("https://docs.google.com/a/switchit001.com/forms/d/1nCN3yKNGigaxiI2NOh7sDwrnwf4AvYDwlZujGDFHg_w/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } // drop
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //meme
  
  if(request.text && botRegey.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("http://www.ordercosmic.com/admin?verifyMe=39Efkeo93j");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //link
  
  if(request.text && botRegez.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("~ If you don't have a Cosmic Sign then we won't help you pay for the parking ticket. ~");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //sign
  
  if(request.text && botRegea.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("Cosmobot commands: /link, /reserve, /drop, /shifts, /sign, /policies");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //help
  
   if(request.text && botRegec.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("https://docs.google.com/document/d/1s4FsTDc3tbZMoiKq51gl26msLW2Op2VUhlQTHTtG1bg/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //shift
  
    if(request.text && botReged.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("https://docs.google.com/document/d/1_ckZEVtIk2LLZupuimvTohWDX0hoRlNwODKlm03sMBA/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  } //policies
  
  
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();

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
}

function postMessage2(string s) {
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
}
/*
function postMessage3() {
  var botResponse, options, body, botReq;

  botResponse = "~ If you don't have a Cosmic Sign then we won't help you pay for the parking ticket. ~";

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
}

function postMessage4() {
  var botResponse, options, body, botReq;

  botResponse = "Cosmobot commands: /link, /reserve, /drop, /shifts, /sign, /policies";

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
}
function postMessage5() {
  var botResponse, options, body, botReq;

  botResponse = "Do it yourself lazy. I'm not that smart.";

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
}
function postMessage6() {
  var botResponse, options, body, botReq;

  botResponse = "147 Ruth Street. Yes, it's some guy's house. Pull to the end of the driveway.";

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
}*/
exports.respond = respond;
