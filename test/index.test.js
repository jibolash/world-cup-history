const expect = require('chai').expect;
const worldCups = require('../index')

describe('The worldCups object', function() {
    it('should contain 20 key-value pairs ', function() {        
        const numberOfTournaments = Object.keys(worldCups).length;
        expect(numberOfTournaments).to.equal(20);
    });
});
