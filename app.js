var http = require('http'),
    httpProxy = require('http-proxy');

// Create your proxy server and set the target in the options.
httpProxy.createProxyServer( 
  {
    target:'https://brandish.com'
  }).listen(8000);
