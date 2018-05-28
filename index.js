'use strict';

var cheerio = require('cheerio');
var fs = require('fs');
var htmlFile = process.argv[2];

if (htmlFile) {
  if (fs.existsSync(htmlFile)) {
    //normalize path
    htmlFile = htmlFile.split('\\').join('/');
    //file exist
    var htmlRaw = fs.readFileSync(htmlFile).toString();
    // console.log(htmlRaw);
    //extract data from html and build a template
    var $ = cheerio.load(htmlRaw, {
      normalizeWhitespace: false,
      xmlMode: true
    });
    var dataGrids = $('wf-data'); //tag to be extracted
    var sourcePathInfo = htmlFile.split('/');
    var sourceFileName = sourcePathInfo[sourcePathInfo.length - 1];
    sourcePathInfo.pop(); //remove the last element - filename
    var exportJsonPath = sourcePathInfo.join('/') + '/' + sourceFileName.split('.')[0] + '.json';
    var exportTemplatePath = sourcePathInfo.join('/') + '/' + sourceFileName.split('.')[0] + '.tpl.html';

    // console.log(exportJsonPath);
    // console.log(exportTemplatePath);
    //
    var exportJSON = [];
    var exportTemplate = '';

    for (var idx = 0; idx < dataGrids.length; idx++) {
      exportJSON.push($(dataGrids[idx]).text());
      $(dataGrids[idx]).attr('source-data', 'data'); //auto assign source data
      $(dataGrids[idx]).attr('context', 'data.content[' + idx + ']'); //auto assign index to data grid
      $(dataGrids[idx]).text(''); //remove extracted text
    }
    exportTemplate = $.html({
      decodeEntities: false
    });

    //write output
    fs.writeFileSync(exportJsonPath, JSON.stringify(exportJSON, null, "\t"));
    fs.writeFileSync(exportTemplatePath, exportTemplate);
    // console.log(exportJSON);
    // console.log(exportTemplate);

    console.log('done!');
  } else {
    //file not exist
    console.error('file not exist.');
  }
} else {
  console.error('no html file passed.');
}
//# sourceMappingURL=index.js.map