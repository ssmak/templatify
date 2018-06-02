<h1 align="center">templatify</h1>

<h5 align="center">Extract layout + data from a HTML file.</h5>

<div align="center">
  <a href="http://travis-ci.org/ssmak/templatify">
    <img src="https://travis-ci.org/ssmak/templatify.svg?branch=master" alt="Travis CI" />
  </a>
</div>

<br />

``` bash
git clone https://github.com/ssmak/templatify.git ~/myproject/utils/templatify.git
cd ~/myproject/utils/templatify.git
npm install
node index.js ~/your_project_folder/templates/your_html_file.html
# your_html_file.html => your_html_file.tpl.html, your_html_file.json, your_html_file.html
```
## History
I worked on a company project that used AngularJS with component based and front-end editing concepts.
In order to simplify the whole development process, I need a tool to extract the layout and data from a HTML file.
I found an existing project called **canner-extract** (https://www.npmjs.com/package/canner-extract), but 
it does not work in the nearly npm version which our team used. As a result, I spend my spare time to develop this 
mini tool. <br /><br />
Thank you for the open source project - **cheerio** which helps me a lot for the core function of data extraction. :clap: :bow:

<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
</div>

## Installation + Test
1. Clone from GitHub (https://github.com/ssmak/templatify)
``` bash
git clone https://github.com/ssmak/templatify.git ~/myproject/utils/templatify.git
```
2. In command line, change to the project root
``` bash
cd ~/myproject/utils/templatify.git
```
3. Install the project dependencies
``` bash
npm install
```
4. Work with the command now!
``` bash
node index.js ~/myproject/utils/templatify.git/test/test.html
```
Above command after run successful, 2 files will be generated in the same location.
* test.tpl.html (layout, a HTML file but suffix with .tpl.html)
* test.json (data file in JSON format)

## Customization
Open the source file index.babel and edit the constant object config. 
All the variables are meaningful, so you should got it! :metal:

## Special Thanks
* cheerio (https://github.com/cheeriojs/cheerio)<br />
Fast, flexible, and lean implementation of core jQuery designed specifically for the server.

## License
MIT
