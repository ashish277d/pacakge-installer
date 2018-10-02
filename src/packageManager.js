'use strict'

const PackageManager = inputData => {
    if (inputData === null)
        throw 'packages is required';
    if (!Array.isArray(inputData))
        throw 'expected array of packages';
    inputData.forEach(value => {
        if (typeof value !== 'string')
            throw 'expected items in array to be of type string';
    });

    const validPackages = inputData;
    const parsedPackages = parsePackages(validPackages);
    return {
        packageInsaller() {

            return topSort(parsedPackages).join(', ');
        }
    };
};


module.exports = packageManager;