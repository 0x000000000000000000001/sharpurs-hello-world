const fs = require('fs');
let code = fs.readFileSync('../sharpurs/src/Main.purs', 'utf8');

// Import Either
if (!code.includes('import Data.Either')) {
  code = code.replace('import Prelude\n', 'import Prelude\nimport Data.Either (Either(..))\n');
}

// Add writeIfChanged function
if (!code.includes('writeIfChanged')) {
  code += `
writeIfChanged :: String -> String -> Effect.Aff.Aff Unit
writeIfChanged path content = do
  oldContent <- attempt (FS.readTextFile UTF8 path)
  case oldContent of
    Right old | old == content -> pure unit
    _ -> FS.writeTextFile UTF8 path content
`;
}

// Replace FS.writeTextFile with writeIfChanged
code = code.replace(/FS\.writeTextFile UTF8/g, 'writeIfChanged');

fs.writeFileSync('../sharpurs/src/Main.purs', code);
