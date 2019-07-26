
//Facebook Debugger is service that allows you to check what information Facebook gets from each page on your site. 
//When you go to https://developers.facebook.com/tools/debug/ paste the URL of the page which share information you
// want to check and customize


var request = require("request");
const async = require('async');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


const fs = require('fs');

let rawdata = fs.readFileSync('products.json');  
let userTrophiesDetails = JSON.parse(rawdata);  


var count = 1;
async.eachSeries(
  userTrophiesDetails.products,
  ( record ,  next) => {

        var options = { method: 'POST',
          url: 'https://graph.facebook.com',
        headers: 
        { 
            'Postman-Token': '8b4d70e6-6b10-49a3-9103-7be5383d4993',
            'cache-control': 'no-cache',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        formData: 
        { 
            id: "https://example.com/products/fb/info/"+ record._id,
            scrape: 'true',
            access_token: Your Access Token 
        } 
    };

////You can get access token from facebook developer by creating new app
////And you can check existing scrape information at https://developers.facebook.com/tools/debug/og/object/

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
      next();
    });
});













