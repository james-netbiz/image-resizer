var fs = require('fs');
var gm = require('gm');

var inputDir = './input/';
var outputDir = './output/';

// If there is no out directory, create it.
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read the input directory.
fs.readdir(inputDir, function(err, files) {
  if (err) {
    console.log(err);
    return;
  }

  // For each file in the input directory...
  files.forEach(function(file) {
    // Create a 200x200 thumbnail of the file.
    gm(inputDir + file)
      .resize(200, 200)
      .write(outputDir + 'thumbnails/' + file, function(err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Created thumbnail of ' + file);
      });
  });
});