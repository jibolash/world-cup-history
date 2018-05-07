const expect = require('chai').expect;
const worldCups = require('../index');

describe('The worldCups function', () => {
    it('returns the correct host of a tournament', () => {
        const hostIn1966 = worldCups.year(1966).hostCountry;
        expect(hostIn1966).to.equal('England');
    });

    it('returns the correct winner for a tournament', () => {
        const winnerIn1978 = worldCups.year(1978).winner;
        expect(winnerIn1978).to.equal('Argentina');
    });

    it('returns the correct runnerup for a tournament', () => {
        const winnerIn1982 = worldCups.year(1982).runnerUp;
        expect(winnerIn1982).to.equal('West Germany');
    });

    it('returns the name of the highest goal scorer for a tournament', () => {
        const topGoalScorerIn1970 = worldCups.year(1970).topGoalScorer[0].name;
        expect(topGoalScorerIn1970).to.equal('Gerd Müller');
    });

    it('returns the correct total attendace for a tournament', () => {
        const attendanceIn2010 = worldCups.year(2010).totalAttendance;
        expect(attendanceIn2010).to.equal(3178856);
    });

    it('returns the correct total number of matches for a tournament', () => {
        const numberOfMatchesIn1954 = worldCups.year(1954).numberOfMatches;
        expect(numberOfMatchesIn1954).to.equal(26);
    });
});
