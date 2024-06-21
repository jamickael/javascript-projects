// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("test that org key returns 'nonprofit'", function() {
    expect(launchcode.launchcode.organization).toBe("nonprofit");
  })
  test("test that executiveDirector key returns 'Jeff'", function() {
    expect(launchcode.launchcode.executiveDirector).toBe("Jeff");
  })
  test("test that percentageCoolEmployees is 100%", function() {
    expect(launchcode.launchcode.percentageCoolEmployees).toBe(100);
  })
  test('test that programsOffered returns ["Web Development", "Data Analysis", "Liftoff"] properly', function() {
    expect(launchcode.launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.launchcode.programsOffered.length).toEqual(3);
  })
  test("test that launchOutput returns the proper phrases", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');

  })

});