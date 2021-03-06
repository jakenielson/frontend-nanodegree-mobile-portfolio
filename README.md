# Website Performance Optimization portfolio project

## What I did
* Resized the images to the size they display when the site is running
* Compressed all of the image files with http://compressjpeg.com/, adding the compressed images to dist. Gulp wasn't compressing them enough, this tool was better.
* Added "print" media queries to the print CSS links
* Added async to the google analytics JS links
* Commented out the webfonts link (it affects performance negatively)
* Added cache-control metatags
* Added a pseudo-async hack to the style.css link
* Pulled the code that touches layout out of the loops in main.js
* Switched querySelectorAll to getElementsByClassName
* Changed the number of background pizzas according to screen height
* Minified all of the HTML, CSS, and JS files with Gulp, adding the minified files to dist

## How to run
1. Install Python 3 https://www.python.org/
2. Open the command line
3. Navigate to the dist directory
4. Run a local server with `python -m http.server`
5. Enter the local server's address into a browser address bar http://localhost:8000/

## How to build dist from src with gulp
1. Install Node and NPM https://nodejs.org/en/
2. Make a copy of src named dist in the same root directory
3. Open the command line
4. Install gulp with `npm install --global gulp-cli`
5. Navigate to the root directory containing src and dist
6. Add NPM and gulp to the project:
    * `npm install --save-dev gulp`
7. Add the dependencies to the project:
    * `npm install --save-dev gulp-uglify`
    * `npm install --save-dev gulp-uglifycss`
    * `npm install --save-dev gulp-htmlmin`
8. Run the following commands:
    * `gulp mini-js`
    * `gulp mini-css`
    * `gulp mini-html`
    * `gulp mini-js-views`
    * `gulp mini-css-views`
    * `gulp mini-html-views`
