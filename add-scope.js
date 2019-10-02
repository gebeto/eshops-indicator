const fs = require('fs');

const packageJsonRaw = fs.readFileSync('package.json', 'utf8');
const packageJson = JSON.parse(packageJsonRaw);
if (packageJson.scope) {
	packageJson.name = [packageJson.scope, packageJson.name].join('/');
	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}