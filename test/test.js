const PackageManager = require("../src/packageManager.js");

describe('Package Manager', () =>{

  test('is a fuction', () => {
    expect(typeof PackageManager).toBe('function');
  }); 

    test('accepts strings array', () => {
		var packages = ['a:b','c:d'];
		var installer = PackageManager(['a:b','c:d']);
	    expect(installer.packages).toEqual(packages);
  });
    test('returns a string', () => {
    expect( PackageManager(['a:b','c:d']).packageInsaller()).toEqual(expect.any(String));
  });
  test ('when input is null', () => {
          expect( () => {
        var packages = null;
		PackageManager(packages).packageInsaller();
    }).toThrow('packages is required');
  });
});