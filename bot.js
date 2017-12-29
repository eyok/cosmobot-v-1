var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      meme = /^\/meme$/,
      link = /^\/link$/,
      sign = /^\/sign$/,
      help = /^\/help$/,
      reserve = /^\/reserve$/,
      drop = /^\/drop$/,
      shifts = /^\/shifts$/,
      policies = /^\/policies$/,
      door = /^\/door$/,
      master = /^\/master$/,
      news = /^\/news$/;
  
  if(request.text && meme.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && link.test(request.text)) {
    this.res.writeHead(200);
    postMessage("This doesn't exist anymore.");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && master.test(request.text)) {
    this.res.writeHead(200);
    postMessage("What is it, peasant?");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    if(request.text && sign.test(request.text)) {
    this.res.writeHead(200);
    postMessage("~Please have a Cosmic Topper or sign, if you don't we won't help you pay for your ticket.~");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    if(request.text && help.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Cosmobot Commands: /sign, /help (but you knew that), /reserve, /drop, /policies, /door, and /shifts. Enjoy!");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && reserve.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/a/switchit001.com/forms/d/1nCN3yKNGigaxiI2NOh7sDwrnwf4AvYDwlZujGDFHg_w/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && drop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/a/switchit001.com/forms/d/1nCN3yKNGigaxiI2NOh7sDwrnwf4AvYDwlZujGDFHg_w/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && shifts.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1s4FsTDc3tbZMoiKq51gl26msLW2Op2VUhlQTHTtG1bg/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
    if(request.text && policies.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1_ckZEVtIk2LLZupuimvTohWDX0hoRlNwODKlm03sMBA/edit");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  if(request.text && door.test(request.text)) {
    this.res.writeHead(200);
    postMessage("8953");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }  
  if(request.text && news.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7abA4a0QCXtSxGN2/giphy.gif");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

}//end respond()

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
