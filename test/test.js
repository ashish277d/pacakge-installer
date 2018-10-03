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

describe('Test passes ', ()=> {
    test('when given a single valid package provided',  ()=>{
      const input = ['a:'];
      expect(PackageManager(input).packageInsaller()).toEqual('a');
    });
    test('when given input with spaces',  ()=> {
      const input = [
        'Kitten Service:Camel Caser',
        'Camel Caser:'
      ];
      expect(PackageManager(input).packageInsaller()).toEqual('Camel Caser, Kitten Service');
    });

    test('with single characters', () =>{
      const input = ('xyzabcdef').split('').map(function(a) { return a + ':'; });
      expect( PackageManager(input).packageInsaller()).toEqual(('xyzabcdef').split('').join(', '));
    });

    test('when  packages are not in order', () =>{
      const input = [
        'Y:X',
        'Z:X',
        'X:',
      ];
      expect(PackageManager(input).packageInsaller()).toEqual('X, Y, Z');
    });

    it('when a package with many dependencies', ()=> {
      var input = [
        'a:',
        'b:a',
        'c:a',
        'x:c',
        'z:c'
      ];
      expect( PackageManager(input).packageInsaller()).toEqual('a, b, c, x, z');
    });

  });

describe('should thrown an error',() => {
    it('for cicular dependencies',  ()=> {
      expect( () => {
        var packages = ['a:b','b:a'];
		PackageManager(packages).packageInsaller();
    }).toThrow('INVALID INPUT : CIRCULAR DEPENDENCY');
    });
  });