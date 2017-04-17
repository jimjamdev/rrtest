const fs = require('fs');

function fixFontPath(filename) {
    if (fs.existsSync(filename)) {
        let content = fs.readFileSync(filename, 'utf8');
        let quote = '"';

        if (/@fontPath\s*:\s*'/.test(content)) {
            quote = "'";
        }

        let newContent = content.replace(
            /@fontPath\s*:\s*("|')\.{2}\/\.{2}\/themes\//g,
            `@fontPath  : ${quote}../../`
        );

        fs.writeFileSync(filename, newContent, 'utf8');
    } else {
        console.warn(`${filename} does not exist`);
    }
}

fixFontPath('node_modules/semantic-ui-less/themes/default/globals/site.variables');
fixFontPath('node_modules/semantic-ui-less/themes/material/globals/site.variables');