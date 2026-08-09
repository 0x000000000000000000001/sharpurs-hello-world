const fs = require('fs');
let code = fs.readFileSync('../sharpurs/src/Main.purs', 'utf8');

code = code.replace('Effect.Aff.Aff', 'Aff');
code = code.replace('import Effect.Aff (launchAff_, attempt)', 'import Effect.Aff (launchAff_, attempt, Aff)');

fs.writeFileSync('../sharpurs/src/Main.purs', code);
