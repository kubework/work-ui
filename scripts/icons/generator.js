'use strict;';

const webfontsGenerator = require('webfonts-generator');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const FONT_TYPES = ['svg', 'ttf', 'woff', 'eot'];

webfontsGenerator({
    files: glob.sync('src/styles/icons/*.svg'),
    dest: 'src/assets/fonts',
    fontName: 'work-icon',
    types: FONT_TYPES,
    cssTemplate: path.resolve(__dirname, './scss.hbs'),
    templateOptions: {
        baseTag: 'i',
        classPrefix: 'work-icon-',
        baseSelector: '.work-icon'
    }
}, function (error) {
    if (error) {
        console.log('Fail!', error);
    } else {
        const scss = fs.readFileSync('src/assets/fonts/work-icon.css', 'utf-8').replace(/url\(\"work-icon/g, 'url\($work-icon-fonts-root + \"work-icon');
        fs.writeFileSync('src/styles/work-icon.scss', scss);
        fs.unlinkSync('src/assets/fonts/work-icon.css');
    }
});
