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
  describe('Test fails when', () => {		
    test('given input is a single string', () => {
      expect(() => { PackageManager('a').packageInsaller(); }).toThrow();
    });
    test('given input a number', () =>{
      expect(() => { PackageManager(1).packageInsaller(); }).toThrow();
    });
    test('given input an object', () => {
      expect(() => { PackageManager({ a:'b' }).packageInsaller(); }).toThrow();
    });

    test('givem array of numbers', () =>{
      expect(() =>{ PackageManager([1,2]).packageInsaller(); }).toThrow();
    });
    test('given array of objects', () => {
      expect(() => { PackageManager([{a:'b'},{a:'b'}]).packageInsaller(); }).toThrow();
    });

     });

