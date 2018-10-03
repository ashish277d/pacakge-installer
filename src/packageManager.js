'use strict'

const packageManager = inputData => {
    if (inputData === null)
        throw 'packages is required';
    if (!Array.isArray(inputData))
        throw 'expected array of packages';
    inputData.forEach(value => {
        if (typeof value !== 'string')
            throw 'expected items in array to be of type string';
    });

    const packages = inputData;
    const validPackages = packageValidator(packages);
    return {
        packages: inputData,
        packageInsaller() {
            return sortModuleDepependency(validPackages).join(', ');
        }
    };
};

/*parse input package array in to js object array and scan its dependency*/

const packageValidator = (dataPackages) => {
    const output = {};
    dataPackages.forEach(item => {
        const items = item.split(':');
        if (items.length !== 2) {
            throw `unexpected input in string: ${value} (expected x:y)`;
        }

        const key = items[0].trim();
        const val = items[1].trim();

        if (key.length === 0) {
            throw `invalid package length: ${value} (expected x:y)`;
        }

        if (!output[key]) output[key] = [];
        if (!output[val] && val.length > 0) output[val] = [];
        if (val.length > 0)
            output[key].push(val);
    });
    return output;
};

const sortModuleDepependency = parsedPackages => {
     const response = [];
    const sorted = {};

    Object.keys(parsedPackages).forEach(k => {
        sort(k, []);
    });

    function sort(k, packages) {
        if (sorted[k])
            return;
        packages.push(k);
        const pkg = parsedPackages[k];
        pkg.forEach(value => {
            if (packages.includes(value)) {
                throw 'INVALID INPUT : CIRCULAR DEPENDENCY';
            }
            sort(value, packages);
        });
        sorted[k] = true;
        response.push(k);
    }

    return response;
};

// const packageInst = [
//     "KittenService: Cyberportal",
//     "Leetmeme: Cyberportal",
//     "Cyberportal: Ice",
//     "CamelCaser: KittenService"

// ];
// const results = PackageManager(packageInst).packageInsaller();
// console.log(results);

module.exports = packageManager;