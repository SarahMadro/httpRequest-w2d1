let https = require('https');

function getAndPrintHTMLChunks() {

  let dataPrint = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    console.log('print', requestOptions);

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      dataPrint += chunk;
      console.log('chunkLength',chunk.length), '\n';
      console.log('show me stuff:', dataPrint),'\n';
      console.log('Chunk received. Length:', chunk.length);
    })

    response.on('end', function() {
      console.log('Response stream complete.');
    })
  });
}
getAndPrintHTMLChunks();